module.exports = function(app, config) {
  return {
    "GET": {
      name: function* () {
        this.body = "This is my cool name function.";
      }
    },
    "POST": {
      name: function* () {
        this.body = "You tried to make a post using the cool api / name";
      }
    }
  };
};