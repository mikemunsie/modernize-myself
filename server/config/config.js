const path = require("path");
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

const environment = {
  dev: {
    port: 9000,
    log: true
  },
  prod: {
    port: 80,
    log: true
  }
};

module.exports = Object.assign(environment[env], {
  base: path.join(__dirname, "../"),
});