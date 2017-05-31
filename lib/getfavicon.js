'use strict';

const request = require("request");
const url = require("url");

function getfavicon (webpage) {
  return new Promise((resolve) => {
    request(url.resolve(webpage, 'favicon.ico'), (err, res) => {
      if (!err && res.statusCode == 200) {
        resolve(url.resolve(webpage, 'favicon.ico'));
      }
    });
    request(webpage, function(err, res, body) {
      let faviconArray = /[rel="shortcut icon"|rel="icon"|rel=icon]?[.]*[^>]href="([\w/._-]*)"[.]*[^>](rel="shortcut icon"|rel="icon"|rel=icon)?[.]*[^>](type="([-\w\/]*)")?/gui.exec(body);
      if (faviconArray != null && faviconArray.length >= 2) {
        let tmpLink = url.resolve(webpage, faviconArray[1]);
        request(tmpLink, (err, res) => {
          if (!err && res.statusCode == 200) {
            resolve(tmpLink);
          }
        });
      }
    });
    request(url.resolve(webpage, '/favicon.ico'), (err, res) => {
      if (!err && res.statusCode == 200) {
        resolve(url.resolve(webpage, '/favicon.ico'));
      }
    });
  });
}

module.exports = getfavicon;
