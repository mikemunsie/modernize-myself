const bodyParser = require("koa-bodyparser");
const errorHandler = require("koa-error");
const logger = require("koa-logger");
const mount = require('koa-mount');
const serve = require("koa-static");
const path = require("path");

module.exports = function(app, config) {
  if (config.log) {
    app.use(logger());
  }
  app.use(bodyParser());
  app.use(errorHandler());
  app.use(mount('/public', serve(path.join(__dirname, "../../public"))));
};