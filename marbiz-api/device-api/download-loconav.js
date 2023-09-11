
app = require('../server/server');
loopback = require("loopback");
const _ = require('lodash');
dbUtil = require("../utils/db-utils")
var loconavService = app.dataSources.loconavService;
var MtDeviceData = loopback.getModel("MtDeviceData")
var MtLastDeviceData = loopback.getModel("MtLastDeviceData");
let iteration = 100

totalcount = 567;
let totalLoop = _.ceil(totalcount / iteration);

const tasks = [];
const getDeviceData = (start, limit) => {
    return new Promise((resolve, reject) => {
        loconavService.findAllDevices(start, limit, function (err, response, context) {
            if (err) reject(err); //error making request
            if (response.error) {
                console.log('> response error: ' + response.error.stack);
                reject(response.error.stack);
            }
            var responseData = [];
            response.forEach(_r => {
                r = {};
                r = _r.data;
                r.createdAt = new Date();
                responseData.push(r);
            });

            resolve(responseData);

            //verify via `curl localhost:3000/api/Magazines`

        });
    })
}

loconavService.findAllDeviceCounts(function (err, response, context) {
    let iteration = 100;
    let totalLoop = _.ceil(response.count / iteration);

    const tasks = [];
    for (let index = 0; index < totalLoop; index++) {
        if (index == 0) {
            start = 0;
            end = 99
        } else {
            start = (index * iteration) ;
            end = ((index + 1) * iteration) - 1
        }
        console.log(start, end)
        tasks.push(getDeviceData(start, end))

    }

    Promise.all(tasks)
        .then(_.flatten)
        .then(responseData => {
            MtDeviceData.create(responseData, (err, data) => {
                if (err) console.error(err)
                else {
                    console.log("Data updated successfully.")
                }
                dbUtil.dropModel("MtLastDeviceData").then(() => {
                    responseData.map(r => {
                        r.cordinate = { lat: r.cordinate[0], lng: r.cordinate[1] };
                        return r;
                    })
                    MtLastDeviceData.create(responseData, (err, data) => {
                        if (err) console.error(err)
                        else {
                            console.log("Last Data updated successfully.")
                        }
                        process.exit();
                    });
                })
            });
        })
        .catch()



})

