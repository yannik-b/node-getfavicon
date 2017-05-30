'use strict';

const request = require("request");
const url = require("url");

function getfavicon (webpage) {
  return new Promise((resolve, reject) => {
    request(webpage, function(err, res, body) {
      let faviconUrl = /<link[\w\s="]*rel="shortcut icon" href="([\w._-]*)"/.exec(body)[1];
      if (faviconUrl === "") {
        faviconUrl = /<link[\w\s="]* href="([\w._-]*)"[\w\s._-]*rel="shortcut icon" /.exec(body)[1];
      }
      if (faviconUrl === "") {
        return null;
      }

      resolve(url.resolve(webpage, faviconUrl));
    });
  });
};

module.exports = getfavicon;
