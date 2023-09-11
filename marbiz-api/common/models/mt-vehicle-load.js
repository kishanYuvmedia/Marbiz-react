/* eslint-disable max-len */
'use strict';
const app = require('../../server/server');
const loopback = require('loopback');
const _ = require('lodash');
const dbUtil = require("../../utils").dbUtil;
module.exports = function (MtVehicleLoad) {
  MtVehicleLoad.getArchiveData = getArchiveData;
  var MtSystemList = loopback.getModel('MtSystemList');
  var MtBusinessProfile = loopback.getModel('MtBusinessProfile');
  var smsService = app.dataSources.smsService;
  let userBusinessProfile, systemRecord;
  MtVehicleLoad.observe('after save', function (context, next) {
    if (!context.isNewInstance) return next();
    var vehicleLoadObject = context.instance;
    let fromCityName, toCityName;
    Promise.all([
      MtSystemList.findOne({ where: { value: vehicleLoadObject.pickupLocation, listType: 'city' } }),
      MtSystemList.find({ where: { value: { inq: [vehicleLoadObject.destination, vehicleLoadObject.pickupLocation] }, listType: 'city' } }),
      MtBusinessProfile.findOne({ where: { mtUserId: vehicleLoadObject.mtUserId } }),
    ])
      .then(result => {
        systemRecord = result[0] || {};
        const _systemRecords = result[1] || {};
        fromCityName = _.get(_.find(_systemRecords, { value: vehicleLoadObject.pickupLocation }), 'label', 'NA');
        toCityName = _.get(_.find(_systemRecords, { value: vehicleLoadObject.destination }), 'label', 'NA');
        userBusinessProfile = result[2] || {};
        let whereObj = {};
        if (!_.isEmpty(systemRecord)) {
          whereObj.city = systemRecord.dbCity;
          whereObj.state = systemRecord.state;
        } else {
          return Promise.resolve([]);
        }
        if (userBusinessProfile.id) {
          whereObj.id = { 'nin': [userBusinessProfile.id] };
        }
        whereObj.businessTypeTag = { 'inq': ['Packers And Movers', 'Transporter'] };
        return MtBusinessProfile.find({ where: whereObj });
      })
      .then(response => {
        if (_.isEmpty(response)) {
          console.log('No mataching records');
          next();
          return;
        }
        let vehicleContactNumber, vehicleContactPerson;
        if (app.get('provideContactDetails')) {
          vehicleContactNumber = vehicleLoadObject.contactNumber;
          vehicleContactPerson = vehicleLoadObject.contactName;
        } else {
          vehicleContactNumber = app.get('debugPhoneNumber');
          vehicleContactPerson = 'Moverstrip';
        }
        // Don't Change Message Contect and Space
        var dltTemplateId = "1207161726324610016";
        var message = `Dear Sir, There is a load available with capacity Up To ${vehicleLoadObject.itemWeight} from ${fromCityName} to ${toCityName} route. If you have any ${vehicleLoadObject.vehicleType} vehicle please contact to ${vehicleContactPerson} at ${'+91' + vehicleContactNumber} for more details Download Moverstrip App https://bit.ly/3cH09F8`;
        if (app.get('debugMode')) {
          console.log(message);
          if (app.get('sendSmsInDebugMode')) {
            console.log(`Sending SMS to (${app.get('debugPhoneNumber')}), ${message}`)
            smsService.sendSMS(app.get('debugPhoneNumber'), message, dltTemplateId, (err, response) => {
              if (err) throw err; // error making request
              if (response.error) {
                console.error('> response error:' + response.error.stack);
              }
              console.log(`Send message:${message} to ${app.get('debugPhoneNumber')}`);
              console.log('SMS sent', response);
            });
          } else {
            response.forEach(r => {
              let toUserPhone = r.contactNumber;
              console.log(`DEBUG SMS to ${toUserPhone}(${app.get('debugPhoneNumber')}), ${message}`)
              console.log(toUserPhone, message)
            })
          }
        } else {
          response.forEach(r => {
            let toUserPhone = r.contactNumber;
            smsService.sendSMS(toUserPhone, message, dltTemplateId, (err, response) => {
              if (err) next(err); // error making request
              if (response.error) {
                console.error('> response error: ' + response.error.stack);
              }
              console.log(`Send message:${message} to ${toUserPhone}`);
              console.log('SMS sent', response);
            });
          });
        }
        next();
      })
      .catch(e => {
        console.error(e);
        next();
      });
  });

  function getArchiveData(days = 30, callback) {
    dbUtil.fetchRecordsFromCollection('MtVehicleLoadArchive', { createdAt: { "$gt": new Date(Date.now() - days * 24 * 60 * 60 * 1000) } }).then(data => {
      callback(null, data)
    }).catch(e => {
      callback(e)
    })
  }
};
