/* eslint-disable max-len */
'use strict';
const app = require('../../server/server');
const loopback = require('loopback');
const _ = require('lodash');
const dbUtil = require("../../utils").dbUtil;
module.exports = function (MtNeedLoad) {
  MtNeedLoad.getArchiveData = getArchiveData
  var MtSystemList = loopback.getModel('MtSystemList');
  var MtBusinessProfile = loopback.getModel('MtBusinessProfile');
  var smsService = app.dataSources.smsService;
  let userBusinessProfile, systemRecord;
  MtNeedLoad.observe('before save', function (context, next) {
    if (context.isNewInstance) {
      if (!_.isArray(context.instance.toLocation)) {
        context.instance.toLocation = [context.instance.toLocation]
      }
    }
    return next();
  });
  MtNeedLoad.observe('after save', function (context, next) {
    if (!context.isNewInstance) return next();
    var needLoadObject = context.instance;
    Promise.all([
      MtSystemList.findOne({ where: { value: needLoadObject.fromLocation, listType: 'city' } }),
      MtBusinessProfile.findOne({ where: { mtUserId: needLoadObject.mtUserId } }),
    ])
      // .then(JSON.toJSON)
      .then(result => {
        systemRecord = result[0] || {};
        userBusinessProfile = result[1] || {};
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
          return next();
        }
        let vehicleContactNumber, vehicleContactPerson;
        if (app.get('provideContactDetails')) {
          vehicleContactNumber = needLoadObject.contactNumber;
          vehicleContactPerson = needLoadObject.contactName;
        } else {
          vehicleContactNumber = app.get('debugPhoneNumber');
          vehicleContactPerson = 'Moverstrip';
        }
        //DLT Message Checked Message Send
        var dltTemplateId = "1207162340281272300";
        var message = `Dear moverstrip subscriber, vehicle no. ${needLoadObject.vehicleNumber} with capacity ${needLoadObject.itemWeight} is standing at ${systemRecord.dbCity} if you have any load for ${needLoadObject.toLocation} route. Please contact to ${vehicleContactPerson} mobile no +91${vehicleContactNumber} For more details Download Moverstrip App from Playstore and subscribe now https://bit.ly/3cH09F8`;
        if (app.get('debugMode')) {
          console.log(message);
          if (app.get('sendSmsInDebugMode')) {
            smsService.sendSMS(app.get('debugPhoneNumber'), message, dltTemplateId, (err, response) => {
              if (err) throw err; // error making request
              if (response.error) {
                console.error('> response error: ' + response.error.stack);
              }
              console.log(`Send message(In debug mode):${message} to ${app.get('debugPhoneNumber')}`);
              console.log('SMS sent', response);
            });
          }
        } else {
          response.forEach(r => {
            let toUserPhone = r.contactNumber;
            smsService.sendSMS(toUserPhone, message, dltTemplateId, (err, response) => {
              if (err) throw err; // error making request
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
    dbUtil.fetchRecordsFromCollection('MtNeedLoadArchive', { createdAt: { "$gt": new Date(Date.now() - days * 24 * 60 * 60 * 1000) } }).then(data => {
      callback(null, data)
    }).catch(e => {
      callback(e)
    })
  }
};
