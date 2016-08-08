var browserSync = require("browser-sync");

module.exports = {
  start: start
};

/**
 * Starts the server and runs browser sync
 * @return {obj} [promise]
 */
function start() {
  Libs.helpers.logStart("Libs.browserSync.start");
  browserSync.init([], {
    "files": [
      "src/images/**/*",
      "src/dist/**/*"
    ],
    "browsers": ['google chrome'],
    "proxy": "http://localhost:3000",
    "open": "local"
  });
  Libs.helpers.logEnd("Libs.browserSync.start");
}