var result = {
  errors: null,
  response: []
};

module.exports = function* (scope, promise) {
  var response;
  try {
    response = yield promise;
  } catch(err) {
    scope.status = 500;
    scope.body = err;
    return;
  }
  scope.body = response;
}