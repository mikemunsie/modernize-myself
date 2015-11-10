// Templates
var koa = require('koa');
var fs = require("fs");
var parse = require('co-body');
var app = koa();
var port = process.argv[2] ? process.argv[2] : 3000;
var views = require('co-views');
var render = views(__dirname + '/views', {
  ext: 'ejs'
});

app.use(function* (next) {
  this.body = yield render('user', { user: user });
});

app.listen(port);