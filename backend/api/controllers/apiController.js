'use strict';

var dbconfig = require('../../dbconfig.js');
var Provider = null;//dbconfig.Provider;
console.log(Provider);

exports.list_all_provs = function(req, res) { 
  dbconfig.list_all_provs(req, res);
};

exports.create_a_prov = function(req, res) {
  var new_provider = new Provider(req.body);
  new_provider.save(function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};

exports.read_a_prov = function(req, res) { 
  dbconfig.read_a_prov(req, res);
};

exports.update_a_prov = function(req, res) {
  dbconfig.update_a_prov(req, res);
};

exports.delete_a_prov = function(req, res) {
  dbconfig.delete_a_prov(req, res);
};