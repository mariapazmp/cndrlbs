'use strict';
module.exports = function(app) {
  var api = require('../controllers/apiController');

  // API Rest Routes
  app.route('/records')
    .get(api.list_all_recs)
    .post(api.create_a_rec);


  app.route('/records/:recordId')
    .get(api.read_a_rec)
    .put(api.update_a_rec)
    .delete(api.delete_a_rec);
};