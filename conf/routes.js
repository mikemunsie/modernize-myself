module.exports = function(Controllers) {

  return {
    "/": Controllers.generic.render("index")
  };
  
};