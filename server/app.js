// Modules
const koa = require('koa');
const views = require('co-views');

// Configuration
const app = koa();
const config = require("./config/config");
const koaConfig = require("./config/koa")(app, config);
const routes = require("./config/routes")(app, config);
const mongo = require("./config/mongo");

// Start App
mongo.connect(app,config)
.then(routes.initializeAPIRoutes)
.then(function() {
  app.listen(config.port);
  console.log("Server started on port: " + config.port);
});
