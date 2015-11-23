const _ = require('koa-route');
const views = require('co-views');
const koaNunjucks = require('koa-nunjucks-2');

module.exports = function(app, config) {

  app.context.render = koaNunjucks({
    autoescape: true,
    ext: 'html',
    path: config.base + 'views'
  });

  function renderPage(page, extra) {
    return function* (ctx) {
      extra = extra ? extra: {};
      yield this.render(page, extra);
    }
  }

  // Routes
  app.use(_.get('/', renderPage('index', {'user': 'cool'})));
  app.use(_.get('/api/test', renderPage('test')));

};