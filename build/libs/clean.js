var del = require("del");

module.exports = {
  app
};

function app() {
  return new Promise(function(resolve, reject) {
    Libs.helpers.logStart("Libs.clean.app");
    del.sync(["./public/dist"], {
      force: true
    });
    resolve();
    Libs.helpers.logEnd("Libs.clean.app");
  });
}