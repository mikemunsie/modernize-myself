var nodemon = require("gulp-nodemon");

module.exports = {
  start
}

function start() {
  return new Promise(function(resolve, reject) {
    Libs.helpers.logStart("Libs.server.start");
    var options = {
      script: 'server/app.js',
      execMap: {
        "js": "node --harmony"
      },
      delayTime: 1,
      env: {
        'PORT': devServerPort,
        'NODE_ENV': 'dev'
      },
      watch: [
        'app.js',
        'conf.json',
        'routes.js',
        './api',
        './config',
        './controllers',
        './libs',
        './models',
        './views',
        './logic'
      ]
    };
    resolve();
    return nodemon(options);
  });
}
