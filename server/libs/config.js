const path = require("path");
const fs = require("fs");
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";
const environment = JSON.parse(fs.readFileSync(process.env.NODE_CONF ? process.env.NODE_CONF : path.join(__dirname, "../conf/") + "conf.json", "utf-8"));

module.exports = Object.assign(environment, {
  base: path.join(__dirname, "../"),
});