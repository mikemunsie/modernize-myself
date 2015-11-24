const _ = require("lodash");
const fs = require("fs");
const route = require('koa-route');
const glob = require("glob");
const path = require("path");
const views = require('co-views');
const koaNunjucks = require('koa-nunjucks-2');

module.exports = function(app, config) {

  var routes = {};

  app.context.render = koaNunjucks({
    autoescape: true,
    ext: 'html',
    path: config.base + 'views'
  });

  // ================================================
  // Interface
  // ================================================

  return {
    initializeAPIRoutes: initializeAPIRoutes,
    renderPage: renderPage
  }

  // ================================================
  // Methods
  // ================================================

  /**
   * Goes through the api folder and creates all the POST, GET, etc. routes
   * @return {Promise}
   */
  function initializeAPIRoutes() {
    return new Promise(function(resolve, reject) {
      var fileName;
      var fileContents;
      var apiURL;
      glob(config.base + "api/**/*.js", null, function (er, files) {

        // Create an object with all of our routes from our API folder
        _.each(files, function(file) {
          fileContents = fs.readFileSync(file, "utf8");
          fileName = path.basename(file).slice(0, -3)
          routes[fileName] = eval(fileContents);
        });

        // With each route, create the api's needed
        _.each(routes, function(apiDefinition, apiName) {

          // Iterate through the GET / POST / UPDATE / etc
          _.each(apiDefinition(app, config), function(apiRequestDefinition, apiRequestType) {
            _.each(apiRequestDefinition, function(apiMethodDefinition, apiMethodName) {
              app.use(route[apiRequestType.toLowerCase()]("/api/" + apiName + "/" + apiMethodName, apiMethodDefinition));
            });
          });
        });
        resolve();
      });
    });
  }

  /**
   * Try and render a regular page
   * @param  {string} page
   * @param  {[type]} extra [description]
   * @return {[type]}       [description]
   */
  function renderPage(page, extra) {
    return function* (ctx) {
      extra = extra ? extra: {};
      yield this.render(page, extra);
    };
  }

};