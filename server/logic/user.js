const UserModel = require("../models/user");
const UserSchema = require("../schemas/user");
const Mapper = require("../libs/mapper");
const MongoHelpers = require("../libs/mongoHelpers");

class UserLogic {

  static getUser(id) {
    return new Promise(function(resolve, reject) {
      UserSchema.find({
        _id: id
      }, function(err, response) {
        if (err) return reject({});
        console.log(response);
        resolve(MongoHelpers.mapResponse(response, [UserModel.adminResponse]));
      });
    });
  }

  static getUsers() {
    return new Promise(function(resolve, reject) {
      UserSchema.find(function(err, response) {
        if (err) return reject(err);
        resolve(MongoHelpers.mapResponse(response, [UserModel.response]));
      });
    });
  }
  
  static saveUser(data) {
    return new Promise(function(resolve, reject) {
      data = Mapper(data, UserModel.create);
      var userModel = new UserSchema(data);
      var validationErrors = userModel.validateSync();
      if (validationErrors) return reject(validationErrors);
      userModel.save(function(err, response) {
        if (err) return reject(err);
        resolve(MongoHelpers.mapResponse(response, UserModel.response));
      });
    });
  }

}

module.exports = UserLogic;