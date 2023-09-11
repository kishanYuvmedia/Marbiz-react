'use strict';
const _ = require('lodash')
const loopback = require('loopback')
const app = require('../../server/server')
module.exports = function (Mtratecard) {

    Mtratecard.findRoadDistance = findRoadDistance;
    function findRoadDistance(from, to, callback) {
        var geoMatrixService = app.dataSources.geoMatrixService;
        var MtSystemList = loopback.getModel('MtSystemList');
        var MtModelCache = loopback.getModel('MtModelCache');
        MtModelCache.findOne({ where: { key: `${from}-${to}`, type: 'road-distance' } })
            .then(data => {
                if (_.isEmpty(data)) {
                    console.log("Cache missed")
                    MtSystemList.find({ where: { value: { inq: [from, to] }, listType: 'sub-locality' } })
                        .then(cityData => {
                            const fromCityRec = _.find(cityData, { value: from });
                            const toCityRec = _.find(cityData, { value: to })
                            const fromAddress = `${fromCityRec.dbCity},${fromCityRec.state},India`;
                            const toAddress = `${toCityRec.dbCity},${toCityRec.state},India`
                            // console.log(fromAddress, toAddress)
                            geoMatrixService.getRoadDistance(
                                fromAddress, toAddress
                            )
                                .then(o => {
                                    const distanceObject = {
                                        key: `${from}-${to}`,
                                        type: 'road-distance',
                                        data: _.chain(o.rows).first().get("elements").first().value()
                                    }
                                    MtModelCache.create(distanceObject)
                                    callback(null, distanceObject)
                                })
                                .catch(error => {
                                    callback(error)
                                })
                        }).catch(error => {
                            callback(error)
                        })
                } else {
                    console.log("Cache hit")
                    callback(null, data)
                }

            })
    }
};
