require("../build");

Libs.clean.app()
  .then(Libs.webpack.setup)
  .then(Libs.sass.compile);
