var result = {
  errors: null,
  response: []
};

module.exports = function* (promiseMethod) {
  var response;
  try {
    response = yield promiseMethod();
  } catch(err) {
    this.status = 500;
    result.errors = err;
    result.response = [];
    this.body = result;
  }
  this.status = 200;
}