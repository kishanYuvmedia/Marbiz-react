'use strict';
const loopback = require('loopback');
module.exports = function(AdCustomerDetails) {
    AdCustomerDetails.observe('before save', function (ctx, next) {
        if (ctx.isNewInstance) {
            AdCustomerDetails.findOne({ order: ['inquiryNumber DESC'] }).then(result => {
                ctx.instance.inquiryNumber = (result.inquiryNumber + 1);
                next();
            }).catch(e => {
                next();
            })
        }
        else {
            next();
        }

    })
    AdCustomerDetails.findOccupationCustomer = (occupationType,req,callback) => {
        var AdOccupationCustomer = loopback.getModel("AdCustomerDetails");
        AdOccupationCustomer.find({ where: { occupation:occupationType} }).then(response => {
         callback(null, response);
        }).catch(e => {
            callback('error: ' + e.message);
        });
    }
};