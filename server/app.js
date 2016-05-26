// Modules
const koa = require("koa");
const views = require("co-views");
const mount = require("koa-mount");
const path = require("path");
const serve = require("koa-static");

// Configuration
const app = koa();
const config = require("./libs/config");
const controllers = require("./libs/controllers")(app, config);
const koaConfig = require("./libs/koa")(app, config);
const routes = require("./libs/routes")(app, config, controllers);
const mongo = require("./libs/mongo");

// Configure some asset stuffs
app.use(mount('/public', serve(path.join(__dirname, "../public"))));
app.use(mount('/public/vendors/font-awesome', serve(path.join(__dirname, "../node_modules/font-awesome"))));


//mongo.connect(app,config)
routes.initApiRoutes();
routes.initUserDefinedRoutes();
app.listen(config.port);
console.log("Server started on port: " + config.port);