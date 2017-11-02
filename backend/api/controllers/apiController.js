'use strict';

var dbconfig = require('../../dbconfig.js');
var Provider = dbconfig.Provider;

exports.list_all_provs = function(req, res) { 
  dbconfig.list_all_provs(req, res);
};

exports.create_a_prov = function(req, res) {
  dbconfig.create_a_prov(req, res);
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