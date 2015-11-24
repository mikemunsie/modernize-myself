const bodyParser = require("koa-bodyparser");
const errorHandler = require("koa-error");
const logger = require("koa-logger");

module.exports = function(app, config) {
  if (config.log) {
    app.use(logger());
  }
  app.use(bodyParser());
  app.use(errorHandler());
};