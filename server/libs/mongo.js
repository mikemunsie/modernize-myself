const mongoose = require('mongoose');

module.exports.connect = function(app, config) {
  return new Promise(function(resolve, reject) {
    mongoose.connect(config.mongo);
    mongoose.connection.on('error', () => { reject(); console.error.bind(console, 'connection error:'); });
    mongoose.connection.once('open', () => resolve());
  });
};