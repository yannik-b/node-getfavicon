'use strict';

const request = require("request");
const url = require("url");

function getfavicon (webpage) {
  return new Promise((resolve, reject) => {
    request(webpage, function(err, res, body) {
      let faviconArrayA = /<link[\w\s="]*rel="shortcut icon" href="([\w._-]*)"/.exec(body);
      let faviconArrayB = /<link[\w\s="]* href="([\w._-]*)"[\w\s._-]*rel="shortcut icon" /.exec(body);

      if (faviconArrayA != null && faviconArrayA.length >= 2) {
        resolve(url.resolve(webpage, faviconArrayA[1]));
      }
      else if (faviconArrayB != null && faviconArrayB.length >= 2) {
        resolve(url.resolve(webpage, faviconArrayB[1]));
      }
      else {
        resolve(null);
      }
    });
  });
};

module.exports = getfavicon;
