'use strict';
const app = require('../../server/server');
const loopback = require("loopback");
const _ = require('lodash');
require('../../utils/json.ext');
// var allModels = app.datasources.mongoDB.models;
// console.log(allModels)
// var MtLastDeviceData = allModels["MtLastDeviceData"];
module.exports = function (Mtvehicle) {
    var loconavService = app.dataSources.loconavService;
    var googleMapService = app.dataSources.googleMapService;
    Mtvehicle.findAllDevices = (filter, vehicleNumber, req, callback) => {
        var MtLastDeviceData = loopback.getModel("MtLastDeviceData");
        getUsersVehicle(req.accessToken.userId).then(vehicles => {
            MtLastDeviceData.find({ where: { vehicle_number: { "inq": vehicles } } }).then(response => {
                let output = [];
                if ((!filter && !vehicleNumber || filter == 'all')) {
                    output = response
                } else if (filter == 'running') {
                    output = response.filter(o => o.motion_state === "moving")
                } else if (filter == 'stopped') {
                    output = response.filter(o => o.motion_state === "stopped")
                } else if (filter == 'no_data') {
                    output = response.filter(o => o.motion_state === "no_data")
                } else if (filter == 'no_network') {
                    output = response.filter(o => o.motion_state === "no_network")
                }
                if (!_.isEmpty(output) && vehicleNumber) {
                    output = output.filter(o => o.vehicle_number === vehicleNumber)
                } else if (_.isEmpty(output) && vehicleNumber) {
                    output = response.filter(o => o.vehicle_number === vehicleNumber)
                }
                callback(null, output);

            }).catch(e => {
                callback('error: ' + e.message);
            });
        }).catch(e => {
            callback('error: ' + e.message);
        });

    }

    Mtvehicle.findAllDeviceStats = (options, req, callback) => {
        var MtLastDeviceData = loopback.getModel("MtLastDeviceData");
        getUsersVehicle(req.accessToken.userId).then(vehicles => {
            MtLastDeviceData.find({ where: { vehicle_number: { "inq": vehicles } } }).then(JSON.toJSON).then(data => {
                let response = {
                    all: _.size(data),
                    running: _.size(data.filter(o => o.motion_state == "moving")),
                    stopped: _.size(data.filter(o => o.motion_state == "stopped")),
                    no_data: _.size(data.filter(o => o.motion_state == "no_data")),
                    no_network: _.size(data.filter(o => o.motion_state == "no_network")),
                }
                callback(null, response);
            }).catch(e => {
                callback('error: ' + e.message);
            });
        }).catch(e => {
            callback('error: ' + e.message);
        });

    }

    Mtvehicle.nearbyVehicle = (vehicleNumber, distance, req, callback) => {
        let baseVehicle;
        var MtLastDeviceData = loopback.getModel("MtLastDeviceData");
        MtLastDeviceData.findOne({
            where: {
                vehicle_number: vehicleNumber
            }
        })
            .then(JSON.toJSON)
            .then(baseVehicle => {
                const vehicleLocation = new loopback.GeoPoint(baseVehicle.cordinate);
                getUsersVehicle(req.accessToken.userId).then(vehicles => {
                    MtLastDeviceData.find({
                        where: {
                            cordinate: {
                                near: vehicleLocation,
                                maxDistance: distance || 100,
                                unit: 'kilometers',
                            },
                            vehicle_number: { "inq": vehicles }
                        },
                    })
                        .then(JSON.toJSON)
                        .then(response => {
                            let allAddresses = _.map(response, "address");
                            googleMapService.getDistance(_.join(allAddresses, "|"), baseVehicle.address, (err, mapDistance) => {
                                response.map(r => {
                                    if (!_.isEmpty(mapDistance)) {
                                        let ind = allAddresses.indexOf(r.address);
                                        if (ind >= 0) {
                                            let distanceData = _.first(mapDistance.rows).elements[ind];
                                            r.eta = distanceData.duration_in_traffic.text;
                                            r.distance = distanceData.distance.text;
                                        }
                                    }

                                    return r
                                })
                                callback(null, response);
                            })

                        }).catch(e => {
                            callback(e)
                        });
                }).catch(e => {
                    console.log(e)
                    callback(e)
                })

            }).catch(e => {
                console.log(e)
                callback(e)
            })
    }
    Mtvehicle.allActiveVehicleList = (req, callback) => {
        Mtvehicle.find({ where: { mtUserId: req.accessToken.userId } }).then(JSON.toJSON).then(response => {
            callback(null, response || []);
        })
    }
    function getUsersVehicle(mtUserId) {
        return new Promise((resolve, reject) => {
            Mtvehicle.find({ where: { mtUserId: mtUserId } }).then(JSON.toJSON).then(response => {
                resolve(_.map(response, "vehicleNumber") || []);
            }).catch(e => {
                reject(e.message)
            })
        })

    }
    Mtvehicle.requestLockVehicle = (vehicleNumber, callback) => {
        loconavService.requestLockVehicle(vehicleNumber, (err, response) => {
            if (err) {
                callback(err);
                return;
            } else {
                console.log("requestLockVehicle response", response)
                callback(null, response);
            }

        });
    }
    Mtvehicle.requestUnlockVehicle = (vehicleNumber, callback) => {
        loconavService.requestUnlockVehicle(vehicleNumber, (err, response) => {
            
            if (err) {
                callback(err);
                return
            } else {
                console.log("requestUnlockVehicle response", response)
                callback(null, response);
            }
        });
    }

};
