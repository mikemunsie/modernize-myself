const UserModel = require("../models/user");
const apiResponse = require("../lib/apiResponse");

module.exports = function(app, config) {
  return {
    "GET": {
      "": function* () {
        var user;
        try {
          var user = yield UserModel.find();
        } catch(err) {
          this.status = 500;
        }
        this.status = 200;
        this.body = user;
      },
      "id/:id": function* (id) {
        var user;
        try {
          var user = yield UserModel.find({ _id: id});
        } catch(err) {
          this.status = 500;
        }
        this.status = 200;
        this.body = user;
      }
    },
    "POST": {
      "": function* () {
        var user = new UserModel(this.request.body);
        yield apiResponse.call(this, user.save);
        this.body = user;
      }
    }
  };
};