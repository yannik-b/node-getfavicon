'use strict';

const request = require("request");
const url = require("url");

function getfavicon (webpage) {
  return new Promise((resolve, reject) => {
    request(webpage, function(err, res, body) {
      let faviconArray = /[rel="shortcut icon"|rel="icon"|rel=icon]?[.]*[^>]href="([\w/._-]*)"[.]*[^>](rel="shortcut icon"|rel="icon"|rel=icon)?[.]*[^>](type="([-\w\/]*)")?/gui.exec(body);

      if (faviconArray != null && faviconArray.length >= 2) {
        resolve(url.resolve(webpage, faviconArray[1]));
      }
    });
  });
}

module.exports = getfavicon;
