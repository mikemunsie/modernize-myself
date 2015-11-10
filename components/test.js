// SCSS
require("./test.scss");

class Test {
  constructor(message) {
    alert(message);
  }
}

new Test(require("./test.json").message);