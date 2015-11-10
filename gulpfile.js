var gulp = require('gulp');
var named = require('vinyl-named');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');

gulp.task('default', function() {

  // JS Files
  return gulp.src('components/**/*.js')
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/'));

});