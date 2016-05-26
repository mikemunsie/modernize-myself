var sourcemaps = require("gulp-sourcemaps");
var minifyCSS = require("gulp-cssnano");
var sass = require("gulp-sass");

module.exports = {
  compile
}

function compile() {
  return new Promise((resolve, reject) => {
    Libs.helpers.logStart("Libs.sass.compile");
    gulp.src("./public/sass/**/*.scss")
    .pipe(plumber(function(err){
      Libs.helpers.logError(err.message);
      return resolve();
    }))
    .pipe(gulpif(devEnvironment, sourcemaps.init()))
    .pipe(sass({
      onError: (err) => {
        return Libs.helpers.logError(err.message);
        resolve();
      }
    }))
    .pipe(gulpif(devEnvironment, sourcemaps.write()))
    .pipe(gulpif(!devEnvironment, minifyCSS({keepBreaks: false})))
    .pipe(gulp.dest("./public/dist/stylesheets"))
    .on("end", function() {
      Libs.helpers.logEnd("Libs.sass.compile");
      return resolve();
    });
  });
}
