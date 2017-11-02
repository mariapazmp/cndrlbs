'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://mariap:mariap@ds231245.mlab.com:31245/evercheck-test-mp';

var database = null;
var ObjectId = require('mongodb').ObjectID;

var mongoose = require('mongoose'),
  Provider = mongoose.model('Providers');


var list_all_provs = function(req, res) {
  MongoClient.connect(url).then(function (db) {	  	  			
  	db.collection('providers').find({}).toArray(function(err, provider) {
    	if (err)
      	res.send(err);
    	res.jsonp(provider);
    	db.close();
  	});  		
  })
  .catch(function (err) { console.log(err);})
};

var create_a_prov = function(req, res) {
  MongoClient.connect(url).then(function (db) {   
    var new_provider = new Provider(req.body);

    db.collection('providers').insertOne(new_provider, function(err, provider) {
      if (err)
        res.send(err);
      res.jsonp(provider);
      db.close();
    });
  })
  .catch(function (err) { console.log(err);})
};

var read_a_prov = function(req, res) {
  MongoClient.connect(url).then(function (db) {	 
  	var query = {_id: new ObjectId(req.params.providerId)};

  	db.collection('providers').find(query).toArray(function(err, provider) { 
  	    if (err)
  	      res.send(err);
  	    res.jsonp(provider);
        db.close();
  	}); 		
  })
  .catch(function (err) { console.log(err);})
};

var update_a_prov = function(req, res) {
  MongoClient.connect(url).then(function (db) {
    var query = {_id: new ObjectId(req.params.providerId)}; 
    var update = { $set: req.body};
    var options = { upsert: true };

    db.collection('providers').updateOne(query, update, options, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
        db.close();
    });
  })
  .catch(function (err) { console.log(err);})
};

var delete_a_prov = function(req, res) {
  MongoClient.connect(url).then(function (db){  
    var query = {_id: new ObjectId(req.params.providerId)};

    db.collection('providers').remove(query, function(err, provider) {
          if (err)
            res.send(err);
          res.jsonp({ message: 'Provider successfully deleted from Database' });
          db.close();

      });   
    })
  .catch(function (err) { console.log(err);})
};

module.exports.list_all_provs = list_all_provs;
module.exports.create_a_prov = create_a_prov;
module.exports.read_a_prov = read_a_prov;
module.exports.update_a_prov = update_a_prov;
module.exports.delete_a_prov = delete_a_prov;


