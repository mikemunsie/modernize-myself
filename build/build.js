// Globals
global._ = require("lodash");
global.gulp = require("gulp");
global.gulpif = require("gulp-if");
global.plumber = require("gulp-plumber");
global.fs = require("fs");
global.Libs = {};
global.devEnvironment = false;
global.devServerPort = 9000;

// Libs
require("fs").readdirSync(require("path").join(__dirname, "libs")).forEach(function(file) {
  global.Libs[file.split(".js")[0]] = require("./libs/" + file);
});