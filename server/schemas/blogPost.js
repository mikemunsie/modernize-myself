const mongoose = require('mongoose');

const Comments = mongoose.Schema({
  title : String,
  body : String,
  date : Date,
});

const BlogPost = mongoose.model('BlogPost', mongoose.Schema({
  author : String,
  title : String,
  body : String,
  date : Date,
  comments : [Comments],
  meta : {
    votes : Number,
    favs  : Number
  }
});

module.exports = BlogPost;