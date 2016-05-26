const Mapper = require("./mapper");

module.exports = {
  mapResponse: function(response, mapToObject) {
    return Mapper(JSON.parse(JSON.stringify(response)), mapToObject);
  }
}