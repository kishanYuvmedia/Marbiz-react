'use strict';
const app = require('../../server/server');
const _ = require('lodash');
const moment = require('moment-timezone');
const {last} = require('lodash');
require('../../utils/json.ext');
// const moment = m.tz('Asia/Kolkata')
module.exports = function(MtDeviceData) {
  const standardTimeFormat = 'Do MMMM YYYY, hh:mm a';
  var loconavService = app.dataSources.loconavService;
  MtDeviceData.hourlyStats = (vehicleNumber, callback) => {
    let endTime = moment().unix();
    let {startTime} = getStartDate('last 1 hr');
    let filter = {where: {vehicle_number: vehicleNumber, motion_state: 'moving', last_received_at: {'gte': startTime}}};
    Promise.all([MtDeviceData.find(filter), vehicleDistanceTravelled(vehicleNumber, startTime, endTime)])
            .then(JSON.toJSON)
            .then(data => {
              if (_.isEmpty(data)) {
                callback(null, {totalDistanceTravelled: 0.0, max_speed: 0.0});
              } else {
                callback(null, {totalDistanceTravelled: data[1].distance || 0.0, max_speed: _.get(_.maxBy(data, 'speed'), 'speed', 0.0)});
              }
            }).catch(e => {
              callback('Some issue with data');
            });
  };
  MtDeviceData.hourlyDetail = (vehicleNumber, dateRange, callback) => {
    let _startTime, startHrTime, endHrTime, newTime, startUxHrTime, endUxHrTime, first, dataChunk, last, avgSpeed;
    const response = [];
    let {startTime, endTime} = getStartDate(dateRange);
    console.log(startTime, endTime);
    let filter = {where: {vehicle_number: vehicleNumber, last_received_at: {'gte': startTime}, last_received_at: {'lt': endTime}}, order: 'last_received_at desc'};
    MtDeviceData.find(filter).then(data => {
      do {
        if (!newTime) newTime = startTime;
        startHrTime = moment(newTime * 1000).startOf('hour');
        startUxHrTime = startHrTime.unix();
        endHrTime = moment(newTime * 1000).endOf('hour');
        endUxHrTime = endHrTime.unix();
        dataChunk = data.filter(o=>o.last_received_at >= startUxHrTime && o.last_received_at <= endUxHrTime);
        avgSpeed = _.meanBy(dataChunk.filter(o=>o.motion_status == 'moving'), 'speed');
                // console.log("endHrTime:", endHrTime.unix());
                // console.log(startHrTime.format(standardTimeFormat), endHrTime.format(standardTimeFormat))
        if (!_.isEmpty(dataChunk)) {
          last = _.last(dataChunk);
          first = _.first(dataChunk);
          response.push({
            startTimeFormat: startHrTime.format(standardTimeFormat),
            endTimeFormat: endHrTime.format(standardTimeFormat),
            startTime: startUxHrTime,
            endTime: endUxHrTime,
            distance: distance(first.cordinate[0], first.cordinate[1], last.cordinate[0], last.cordinate[1], 'K'),
            avgSpeed: formatNumberOutput(avgSpeed || 0),
            location: last.address,
          });
        }

        newTime = endHrTime.unix() + 150;
      } while (newTime < endTime);
            // let response = [{ start_time: "18/12/2020 12:00 am", end_time: "18/12/2020 12:55 am", distance: 20.55, avg_speed: 25.5, location: "someesar rani rd,rajasthan 306119, india" }]
      callback(null, _.reverse(response));
    });
  };

  MtDeviceData.avgSpeedStats = (vehicleNumber, callback) => {
    let {startTime} = getStartDate('last 30 days');
    let filter = {where: {vehicle_number: vehicleNumber, motion_state: 'moving', last_received_at: {'gte': startTime}}};
    MtDeviceData.find(filter).then(data => {
      if (_.isEmpty(data)) {
        callback(null, {avg_speed: 0, max_speed: 0});
      } else {
        callback(null, {avg_speed: formatNumberOutput(_.meanBy(data, 'speed')) || 0});
      }
    }).catch(e => {
      callback('Some issue with data');
    });
  };
  MtDeviceData.avgSpeedDetail = (vehicleNumber, dateRange, callback) => {
    const {endTime, startTime, summaryStart, summaryEnd} = getStartDate(dateRange);
    let filter = {where: {vehicle_number: vehicleNumber, last_received_at: {'gte': startTime, 'lt': endTime}, motion_status: {'inq': ['moving']}}, order: 'last_received_at desc'};
        // console.log(JSON.stringify(filter));
    let groupByObj = {
      '0-30': {
        id: 1,
        distance: 0,
        coordinates: [],
      },
      '30-50': {
        id: 2,
        distance: 0,
        coordinates: [],
      },
      '50-70': {
        id: 3,
        distance: 0,
        coordinates: [],
      },
      '70-100': {
        id: 4,
        distance: 0,
        coordinates: [],
      },
      '>100': {
        id: 5,
        distance: 0,
        coordinates: [],
      },
    };
    MtDeviceData.find(filter).then(JSON.toJSON).then(result => {
      console.log(_.size(result));
      _.each(result, r => {
        if (r.speed > 0 && r.speed <= 30) groupByObj['0-30'].coordinates.push({cordinate: r.cordinate});
        else if (r.speed > 30 && r.speed <= 50) groupByObj['30-50'].coordinates.push({cordinate: r.cordinate});
        else if (r.speed > 50 && r.speed <= 70) groupByObj['50-70'].coordinates.push({cordinate: r.cordinate});
        else if (r.speed > 70 && r.speed <= 100) groupByObj['70-100'].coordinates.push({cordinate: r.cordinate});
        else if (r.speed > 100) groupByObj['>100'].coordinates.push({cordinate: r.cordinate});
      });

      _.keys(groupByObj).forEach(gd => {
        let totalDistance = 0, old = {};
        groupByObj[gd].coordinates.forEach(d => {
          if (!_.isEmpty(old)) {
            totalDistance = totalDistance + distance(old.cordinate[0], old.cordinate[1], d.cordinate[0], d.cordinate[1]);
          }
          old = d;
        });
        groupByObj[gd].distance = totalDistance;
      });
      let response = [
                // { id: 1, speed: "0-30", distance: 565 },
                // { id: 2, speed: "30-50", distance: 525 },
                // { id: 3, speed: "50-70", distance: 100 },
                // { id: 4, speed: "70-100", distance: 510 },
                // { id: 5, speed: ">100", distance: 525 }
      ];
      _.keys(groupByObj).forEach(k => {
        response.push({id: groupByObj[k].id, speed: k, distance: formatNumberOutput(groupByObj[k].distance)});
      });

      callback(null, _.orderBy(response, 'id'));
    });
  };
  MtDeviceData.stoppageStats = (vehicleNumber, callback) => {
    let {startTime} = getStartDate('last 24 hrs');
    let filter = {where: {vehicle_number: vehicleNumber, motion_state: 'stopped', last_received_at: {'gt': startTime}}, order: 'last_received_at desc'};
    MtDeviceData.find(filter).then(data => {
      let totalStopTime = 0;
      let oldTime = 0;
      let stopTime = 0;
      data.forEach(d => {
        if (oldTime > 0) {
          stopTime = oldTime - d.last_received_at;
          totalStopTime = totalStopTime + stopTime;
        }
        oldTime = d.last_received_at;
      });
      callback(null, {stoppage: formatNumberOutput(totalStopTime / 3600)});
    }).catch(e => {
      console.log(e);
      callback('Some issue with data:', e);
    });
  };
  MtDeviceData.stoppageDetail = (vehicleNumber, dateRange, callback) => {
    const {endTime, startTime, summaryStart, summaryEnd} = getStartDate(dateRange);
    let filter = {where: {vehicle_number: vehicleNumber, last_received_at: {'gte': startTime, 'lt': endTime}}, order: 'last_received_at desc'};
    MtDeviceData.find(filter)
            .then(_result => {
              let result = JSON.toJSON(_result || []);
              let pairedRec = {}, last;
              const stopDetails = [];
              const _stopDetail = [];
              for (let index = 0; index < result.length; index++) {
                let d = result[index];
                let next = result[index];
                if (_.keys(pairedRec).length == 0 && d.motion_status == 'stopped') pairedRec.end = d;
                if (_.keys(pairedRec).length == 1 && next.motion_status == 'moving') pairedRec.start = d;
                if (_.keys(pairedRec).length == 2) {
                  _stopDetail.push(pairedRec);
                  pairedRec = {};
                } else continue;
              }

              _.each(_stopDetail, md => {
                stopDetails.push({
                  location: md.start.address,
                  startTime: moment.unix(md.start.last_received_at).format(standardTimeFormat),
                  endTime: moment.unix(md.end.last_received_at).format(standardTimeFormat),
                  duration: calculateDuration(md.start.last_received_at, md.end.last_received_at),
                });
              });
              callback(null, {summaryStart, summaryEnd, stopDetails});
            });
  };

  function calculateDuration(startTime, endTime) {
    let diff = (endTime - startTime) * 1000;
    const calArr = [];
    if (moment.duration(diff).days() > 0) calArr.push(`${moment.duration(diff).days()} days`);
    if (moment.duration(diff).hours() > 0) calArr.push(`${moment.duration(diff).hours()} hours`);
    if (moment.duration(diff).minutes() > 0) calArr.push(`${moment.duration(diff).minutes()} minutes`);
    return _.join(calArr, ', ');
  }

  MtDeviceData.movementStats = (vehicleNumber, callback) => {
    const {startTime} = getStartDate('last 7 days');
    let filter = {where: {vehicle_number: vehicleNumber, last_received_at: {'gte': startTime}}};
    MtDeviceData.find(filter).then(data => {
      if (_.isEmpty(data)) {
        callback(null, {movements: 0});
      } else {
        const {movements, totalStopTime, totalRunTime} = calculateTravelStopTime(data);
        callback(null, {movements});
      }
    }).catch(e => {
      callback('Some issue with data');
    });
        // callback(null, { movements: 532 })
  };
  MtDeviceData.movementDetail = (vehicleNumber, dateRange, callback) => {
    const {endTime, startTime, summaryStart, summaryEnd} = getStartDate(dateRange);
    let filter = {where: {vehicle_number: vehicleNumber, last_received_at: {'gte': startTime, 'lt': endTime}, motion_status: {'inq': ['moving', 'stopped']}}, order: 'last_received_at desc'};
    MtDeviceData.find(filter).then(JSON.toJSON).then(result => {
      let pairedRec = {};
      const _movementDetail = [];
      const movementDetails = [];
      _.each(result, d => {
        if (d.motion_status == 'moving' && _.keys(pairedRec).length == 0) pairedRec.end = d;
        if (d.motion_status == 'stopped' && _.keys(pairedRec).length == 1) pairedRec.start = d;
        if (_.keys(pairedRec).length == 2) {
          _movementDetail.push(pairedRec);
          pairedRec = {};
        }
      });
      _.each(_movementDetail, md => {
        if (md.start.address != md.end.address) {
          movementDetails.push({
            startLocation: md.start.address,
            startCordinates: md.start.cordinate,
            endLocation: md.end.address,
            endCordinates: md.end.cordinate,
            startTime: moment.unix(md.start.last_received_at).format('hh:mm a, Do MMMM YYYY'),
            endTime: moment.unix(md.end.last_received_at).format('hh:mm a, Do MMMM YYYY'),
            duration: `${Math.round((md.end.last_received_at - md.start.last_received_at) / 60, 1)} m`,
            startUnixTime: md.start.last_received_at,
            endUnixTime: md.end.last_received_at,
            kms: formatNumberOutput(distance(md.start.cordinate[0], md.start.cordinate[1], md.end.cordinate[0], md.end.cordinate[1], 'K')),

          });
        }
      });
      callback(null, {summaryStart, summaryEnd, movementDetails});
    });
  };

  MtDeviceData.vehicleSummary = (vehicleNumber, callback) => {
    let filter = {where: {vehicle_number: vehicleNumber}, order: 'last_received_at desc'};
    let {startTime} = getStartDate('today');
    Promise.all([
      MtDeviceData.find(filter),
      vehicleDistanceTravelled(vehicleNumber, startTime, moment().unix()),
    ]).then(JSON.toJSON).then(result => {
      let vehicleData = result[0];
      if (_.isEmpty(vehicleData)) {
        callback('No Vehicle Data', null);
      }
      let distanceTravelled = result[1];
      let _last_received_at, oldRec;
      for (let index = 0; index < vehicleData.length; index++) {
        let d = vehicleData[index];
        if (!_.isEmpty(oldRec) && d.motion_status != oldRec.motion_status) {
          _last_received_at = d.last_received_at;
          break;
        }
        oldRec = d;
      }
      let firstVehicleData = _.first(vehicleData);
      const {totalStopTime, totalRunTime} = calculateTravelStopTime(vehicleData, startTime);

      callback(null, {
        cordinate: firstVehicleData.cordinate.map(o=>parseFloat(o)),
        orientation:firstVehicleData.orientation,
        motionStatus:firstVehicleData.motion_status,
        location: firstVehicleData.address,
        lastChecked: moment(firstVehicleData.last_received_at * 1000).fromNow(),
        lastStatus: `${firstVehicleData.motion_status} since ${moment(_last_received_at * 1000).fromNow().replace(' ago', '')}`,
        speed: firstVehicleData.speed,
        distanceTravelled: distanceTravelled.distance,
        stopTime: totalStopTime,
        travelTime: totalRunTime,
      });
    }).catch(e => {
      console.log(e);
      callback('Some issue with data:', e);
    });
  };
  MtDeviceData.travelStats = (vehicleNumber, callback) => {
    let timeLapse = moment().startOf('day').unix();
    let filter = {where: {vehicle_number: vehicleNumber, last_received_at: {'gt': timeLapse}}, order: 'last_received_at asc'};
    MtDeviceData.find(filter).then(data => {
      const {totalDistanceTravelled, totalStopTime, totalRunTime} = calculateTravelStopTime(data);
      callback(null, {
        travelTime: totalRunTime,
        distanceTraveled: totalDistanceTravelled,
        totalStopTime: totalStopTime,
      });
    }).catch(e => {
      console.log(e);
      callback('Some issue with data:', e);
    });
  };

  MtDeviceData.ignitionAlert = (vehicleNumber, callback) => {
    const response = [
      {
        id: '1',
        startLocation: 'Nagaur, Kurada, Rajasthan,341501,India',
        endLocation: 'Nagaur, Kurada, Rajasthan,341501,India',
        startTime: 'Turned On At: 05:28 pm, Tuesday 08 Dec 2020',
        endTime: 'Turned On At: 05:28 pm, Tuesday 08 Dec 2020',
        duration: 1,
        status: 'Active',
      },
    ];
    callback(null, response);
  };
  const vehicleDistanceTravelled = (vehicleNumber, startTime, endTime) => {
    return new Promise((resolve, reject) => {
      loconavService.findVehicleDistanceTravelled(startTime, endTime, vehicleNumber, function(err, response) {
        if (err) throw err; // error making request
        if (response.error) {
          reject('> response error: ' + response.error.stack);
        }
        resolve(response);
      });
    });
  };

  function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }        else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == 'K') { dist = dist * 1.609344; }
      if (unit == 'N') { dist = dist * 0.8684; }
      return dist;
    }
  }
  function formatNumberOutput(number) {
    return parseFloat(number.toFixed(1));
  }

  function calculateTravelStopTime(data, startTime) {
    if (startTime) data = _.filter(data, o => o.last_received_at > startTime);
    data = _.orderBy(data, ['last_received_at'], 'asc');
    let totalRunTime = 0;
    let totalDistanceTravelled = 0;
    let oldTime = 0;
    let runTime = 0;
    let stopTime = 0;
    let totalStopTime = 0;
    let oldRecord = {};
    let movements = 0;
    data.forEach(d => {
      if (oldTime > 0) {
        if (d.motion_state == 'moving') {
          runTime = d.last_received_at - oldTime;
          totalRunTime = totalRunTime + runTime;
                    // } else if (d.motion_state == 'stopped') {
        } else {
          stopTime = d.last_received_at - oldTime;
          totalStopTime = totalStopTime + stopTime;
        }
        if (_.includes(['moving', 'stopped'], d.motion_state) && oldRecord.motion_state != d.motion_state) {
          movements++;
        }
      }
      if (!_.isEmpty(oldRecord)) {
        totalDistanceTravelled = totalDistanceTravelled + distance(d.cordinate[0], d.cordinate[1], oldRecord.cordinate[0], oldRecord.cordinate[1], 'K');
      }
      oldTime = d.last_received_at;
      oldRecord = d;
    });
    return {totalDistanceTravelled, totalStopTime: formatNumberOutput(totalStopTime / 3600), totalRunTime: formatNumberOutput(totalRunTime / 3600), movements};
  }
  function getStartDate(selectedOption) {
    let startTime, endTime;
    if (selectedOption == 'last 1 hr') {
      startTime = moment().subtract(1, 'h');
      endTime = moment();
      return {endTime, startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // last 24 hr
    if (selectedOption == 'last 24 hrs') {
      startTime = moment().subtract(24, 'h');
      endTime = moment();
      return {endTime, startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // Today
    if (selectedOption == 'today') {
      startTime = moment().startOf('day');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // Yesterday
    if (selectedOption == 'yesterday') {
      startTime = moment().subtract(1, 'd').startOf('day');
      endTime = moment().subtract(1, 'd').endOf('day');
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // This Week (Sun - Today)
    if (selectedOption == 'this week') {
      startTime = moment().day('Sunday');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // Last Week (Mon - Sunday)
    if (selectedOption == 'last week') {
      startTime = moment().day('Monday').subtract(1, 'w').startOf('day');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // Last 7 Days
    if (selectedOption == 'last 7 days') {
      startTime = moment().subtract(7, 'd');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // Last 14 days
    if (selectedOption == 'last 15 days') {
      startTime = moment().subtract(15, 'd');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // This Month
    if (selectedOption == 'this month') {
      startTime = moment().startOf('month');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }

        // Last 30 Days
    if (selectedOption == 'last 30 days') {
      startTime = moment().subtract(30, 'd');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }
        // Last Month
    if (selectedOption == 'last month') {
      startTime = moment().startOf('month').subtract(1, 'M');
      endTime = moment();
      return {endTime: endTime.unix(), startTime: startTime.unix(), summaryStart: startTime.format(standardTimeFormat), summaryEnd: endTime.format(standardTimeFormat)};
    }
  }
};
