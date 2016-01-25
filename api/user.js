const UserLogic = require("../logic/user");
const ApiResponse = require("../libs/apiResponse");

module.exports = function(app, config) {
  return {
    "GET": {
      "/": function* () {
        yield ApiResponse(this, UserLogic.getUsers(this.request));
      },
      "/id/:id": function* (id) {
        yield ApiResponse(this, UserLogic.getUser(id));
      }
    },
    "POST": {
      "/": function* () {
        yield ApiResponse(this, UserLogic.saveUser(this.request.body));
      }
    }
  };
};