module.exports = function(app, config) {

  return {
    render: render
  }

 /**
   * Try and render a page
   * @param  {string} page
   * @param  {object} extra [description]
   * @return {generator}
   */
  function render(page, extra) {
    return function* (ctx) {
      extra = extra ? extra: {};
      yield this.render(page, extra);
    };
  }

};