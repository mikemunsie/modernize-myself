module.exports = function(app, config) {
  return {
    "GET": {
      name: function* () {
        this.body = "This is my test name function.";
      }
    },
    "POST": {
      name: function* () {
        this.body = this.request.body;
      }
    }
  };
};