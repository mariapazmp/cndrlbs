'use strict';
module.exports = function(app) {
  var api = require('../controllers/apiController');

  app.route('/providers')
    .get(api.list_all_provs)
    .post(api.create_a_prov);

  app.route('/providers/:providerId')
    .get(api.read_a_prov)
    .put(api.update_a_prov)
    .delete(api.delete_a_prov);
};