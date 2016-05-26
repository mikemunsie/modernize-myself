const _ = require("lodash");
const fs = require("fs");
const route = require('koa-route');
const glob = require("glob");
const koaNunjucks = require('koa-nunjucks-2');
const path = require("path");

module.exports = function(app, config, controllers) {

  const userDefinedRoutes = require("../conf/routes.js")(controllers);

  app.context.render = koaNunjucks({
    autoescape: true,
    ext: 'html',
    path: config.base + 'views'
  });

  return {
    initApiRoutes: initApiRoutes,
    initUserDefinedRoutes: initUserDefinedRoutes
  }

  /**
   * Initalize and define the routes for the API Calls
   * @return {void}
   */
  function initApiRoutes() {

    var api = {};
    var files = [];

    files = glob.sync(config.base + "api/**/*.js", null);

    // Create an object with all of our api from our API folder
    _.each(files, function(file) {
      fileName = path.basename(file).slice(0, -3);
      api[fileName] = require(file);
    });

    // With each route, create the api's needed
    _.each(api, function(apiDefinition, apiName) {

      // Iterate through the GET / POST / UPDATE / etc
      _.each(apiDefinition(app, config), function(apiRequestDefinition, apiRequestType) {
        _.each(apiRequestDefinition, function(apiMethodDefinition, apiMethodName) {
          app.use(route[apiRequestType.toLowerCase()](config.apiUrl + "/" + apiName + apiMethodName, apiMethodDefinition));
        });
      });
    });

  }

  /**
   * Initalize and define the user defined routes
   * @return {void}
   */
  function initUserDefinedRoutes() {

    _.each(userDefinedRoutes, function(def, url) {
      app.use(route["get"](url, def));
    });
  }
   
};