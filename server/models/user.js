const mongoose = require('mongoose');

const create = {
  name: String,
  age: Number,
  date: String
};

const response = {
  _id: String,
  age: Number,
  date: String,
  name: String
};

const adminResponse = {
  _id: String,
  age: Number,
  date: String,
  flagged: Boolean,
  group: Number,
  name: String
};

module.exports = {
  adminResponse: adminResponse,
  create: create,
  response: response
};