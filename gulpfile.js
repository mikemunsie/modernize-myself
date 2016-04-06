// Modules
const _ =             require("lodash");
const del =           require("del");
const gulp =          require('gulp');
const gulpif =        require("gulp-if");
const minifyCSS =     require("gulp-cssnano");
const named =         require('vinyl-named');
const plumber =       require("gulp-plumber");
const gulpUtil =      require("gulp-util");
const sass =          require("gulp-sass");
const through2 =      require("through2");
const notifier =      require("node-notifier");
const nodemon =       require("gulp-nodemon");
const uglify =        require("gulp-uglify");
const gulpWatch =     require("gulp-watch");
const sourcemaps =    require("gulp-sourcemaps");
const webpack =       require("webpack");
const webpackDevServer = require("webpack-dev-server");

// Locals
var devEnvironment = false;
const devServerPort = 9000;

function logStart(name) {
  return gulpUtil.log(gulpUtil.colors.green("Started: " + name));
}

function logEnd(name) {
  return gulpUtil.log(gulpUtil.colors.blue("(completed) - " + name));
}

function logError(err) {
  gulpUtil.log(gulpUtil.colors.red(err));
  if (devEnvironment) {
    notifier.notify({
      title: "Error",
      message: err
    });
  }
}

function showError(msg){
  gulpUtil.log(gulpUtil.colors.red(msg));
}

function clean() {
  return new Promise(function(resolve, reject) {
    logStart("Clean");
    del.sync(["./public/dist"], {
      force: true
    });
    resolve();
    logEnd("Clean");
  });
}

function setupWebpack() {
  return new Promise(function(resolve, reject) {
    logStart("setupWebpack");
    var compiler;
    try {
      var compiler = webpack(require("./webpack.config.js")(!devEnvironment));
    } catch(e) {
      logError(e);
      return resolve();
    }
    compiler.run((err, stats) => {
      if (err) logError(err);
      resolve();
    });
  });
}

function compileSASS() {
  return new Promise((resolve, reject) => {
    logStart("compileSASS");
    gulp.src("./public/sass/**/*.scss")
    .pipe(plumber(function(err){
      logError(err.message);
      return resolve();
    }))
    .pipe(gulpif(devEnvironment, sourcemaps.init()))
    .pipe(sass({
      onError: (err) => {
        return logError(err.message);
        resolve();
      }
    }))
    .pipe(gulpif(devEnvironment, sourcemaps.write()))
    .pipe(gulpif(!devEnvironment, minifyCSS({keepBreaks: false})))
    .pipe(gulp.dest("./public/dist/stylesheets"))
    .on("end", function() {
      logEnd("compileSASS");
      return resolve();
    });
  });
}


function startWebpackServer() {
  logStart("startWebpackServer");
  try {
    var webpackConfig = require("./webpack.config.js")(!devEnvironment);
    var server = new webpackDevServer(webpack(webpackConfig), {
      hot: true,
      historyApiFallback: false,
      proxy: {
        "*": `http://localhost:${devServerPort}`
      },
      publicPath: webpackConfig.output.publicPath
    });
  } catch(e) {
    console.log(e);
  }
  server.listen(3000, "localhost", function() {});
}

function startServer() {
  return new Promise(function(resolve, reject) {
    logStart("startServer");
    var options = {
      script: './app.js',
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
    logEnd("startServer");
    resolve();
    return nodemon(options);
  });
}

function watchChanges() {
  logStart("watchChanges");

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

gulp.task('default', function() {
  clean()
  .then(setupWebpack)
  .then(compileSASS);
});

gulp.task('dev', function() {
  devEnvironment = true;
  clean()
    .then(compileSASS)
    .then(startServer)
    .then(startWebpackServer)
    .then(watchChanges);
});