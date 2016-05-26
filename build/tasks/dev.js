require("../build");

devEnvironment = true;
Libs.clean.app()
  .then(Libs.sass.compile)
  .then(Libs.server.start)
  .then(Libs.webpack.start)
  .then(Libs.watch.watch);