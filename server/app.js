// Modules
const koa = require('koa');
const views = require('co-views');

// Configuration
const app = koa();
const config = require("./config/config");
require("./config/koa")(app, config);
require("./config/routes")(app, config);

// Start App
app.listen(config.port);
console.log("Server started on port: " + config.port);