/* eslint-disable one-var */
'use strict';
const _ = require('lodash');
module.exports = function(Mtbusinessprofile) {
  Mtbusinessprofile.getUniqueLocations = (businessType, state, callback) => {
    const allState = [], allCity = [];
    let filter = {where: {businessTypeTag: {'inq': businessType}}};
    Mtbusinessprofile.find(filter)
            .then(JSON.toJSON)
            .then(data => {
              if (_.isEmpty(data)) {
                callback(null, {city: [], state: []});
              } else {
                _.uniq(_.map(data, 'state')).sort().forEach(o=>{
                  allState.push({label: o, value: o});
                });
                if (!state) {
                  _.uniq(_.map(data, 'city')).sort().forEach(o=>{
                    allCity.push({label: o, value: o});
                  });
                } else {
                  // eslint-disable-next-line max-len
                  _.uniq(_.map(data.filter(o=>o.state == state), 'city')).sort().forEach(o=>{
                    allCity.push({label: o, value: o});
                  });
                }

                callback(null, {city: allCity, state: allState});
              }
            });
  };
};
