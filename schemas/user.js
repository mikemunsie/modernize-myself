const mongoose = require('mongoose');

const User = mongoose.model('User', mongoose.Schema({
  name: String,
  age: Number,
  date: {
    type: Date,
    default: Date.now
  },
  group: {
    type: Number,
    default: 0
  },
  flagged: {
    type: Boolean,
    default: false,
    required: false
  }
}));

module.exports = User;