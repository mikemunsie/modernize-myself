const bodyParser = require("koa-bodyparser");
const errorHandler = require("koa-error");
const logger = require("koa-logger");
const path = require("path");

module.exports = function(app, config) {
  if (config.log) {
    app.use(logger());
  }
  app.use(bodyParser());
  app.use(errorHandler());

  app.use(function *Custom404Handling(next) {
    yield next;
    if (404 != this.status) return;
    this.status = 404;
    switch (this.accepts('html', 'json')) {
      case 'html':
        yield this.render('404');
        break;
      case 'json':
        this.body = {
          message: 'API not found :/'
        };
        break;
      default:
        this.type = 'text';
        this.body = 'Page Not Found';
    }
  });

};