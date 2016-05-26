const _ = require("lodash");
const fs = require("fs");
const route = require('koa-route');
const glob = require("glob");
const path = require("path");
var controllers = null;

module.exports = function(app, config) {

  // If we already have it defined, let's leave.
  if (controllers) return controllers;

  controllers = {};

  var fileName;
  var fileContents;
  var apiURL;
  
  var files = glob.sync(config.base + "controllers/**/*.js", null);

  // Create an object with all of our controllers
  _.each(files, function(file) {
    fileName = path.basename(file).slice(0, -3);
    controllers[fileName] = require(file)(app, config);
  });

  return controllers;
   
};