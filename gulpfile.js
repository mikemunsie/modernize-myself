// Modules
var browserSync = require("browser-sync");
var gulp =        require('gulp');
var gulpif =      require("gulp-if");
var named =       require('vinyl-named');
var webpack =     require('webpack-stream');
var uglify =      require('gulp-uglify');
var nodemon =     require('gulp-nodemon');
var gulpWatch =   require("gulp-watch");

// Locals
var devEnvironment = false;
var devServerPort = 9000;

function compileJS() {
  return new Promise(function(resolve, reject) {
    return gulp.src('public/components/**/*.js')
      .pipe(named())
      .pipe(webpack(require('./webpack.config.js')))
      .pipe((gulpif(!devEnvironment, uglify({
        mangle: false
      }))))
      .pipe(gulp.dest('public/dist/'))
      .on('end', resolve)
  });
}

function startBrowserSync() {
  return new Promise(function(resolve, reject) {
    browserSync.init({
      files: [
        "public/dist/**/*",
      ],
      browsers: ["google chrome"],
      proxy: "localhost:" + devServerPort,
      injectChanges: true
    });
    return resolve();
  });
}

function startServer() {
  return new Promise(function(resolve, reject) {
    var options = {
      script: './server/app.js',
      execMap: {
        "js": "node --harmony"
      },
      delayTime: 1,
      env: {
        'PORT': devServerPort,
        'NODE_ENV': 'dev'
      },
      watch: ['./server']
    };
    resolve();
    return nodemon(options);
  });
}

function watchChanges() {
  gulpWatch([
    "./server/**/*"
  ], function() {
    browserSync.reload();
  });
}

gulp.task('default', function() {
  compileJS();
});

gulp.task('dev', function() {
  devEnvironment = true;
  compileJS()
  .then(startServer)
  .then(startBrowserSync)
  .then(watchChanges);
});