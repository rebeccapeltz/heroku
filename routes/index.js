//var ctrl = require('../app_server/controllers/main');

//module.exports = function (app) {
//  app.get('/', ctrl.index);
//};

module.exports = function(app) {
  require('./main') (app);
  require('./locations') (app);
  };
