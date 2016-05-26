var gulpWatch = require("gulp-watch");

module.exports = {
  watch
};

function watch() {
  Libs.helpers.logStart("Libs.watch.watch");

  // Server Changes
  gulpWatch([
    './api/**/*',
    './conf/**/*',
    './controllers/**/*',
    './libs/**/*',
    './models/**/*',
    './views/**/*'
  ], function() {
    // RELOAD WEBPACK
  });

  gulpWatch([
    "public/sass/**/*.scss"
  ], function() {
    compileSASS();
  });
}