var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://mariap:mariap@ds231245.mlab.com:31245/evercheck-test-mp';

var database = null;

var mongoConnect = function() {
  MongoClient.connect(url)
  .then(function (db) { // <- db as first argument  	
  	database = db;  	
  })
  .catch(function (err) { console.log(err);})
};


var list_all_provs = function(req, res) {
  MongoClient.connect(url)
  .then(function (db) 
  {	  	  			
  	db.collection('providers').find({}).toArray(function(err, provider) 
  	{
    	if (err)
      		res.send(err);
    	res.jsonp(provider);
  	});  		
  })
  .catch(function (err) { console.log(err);})
};

var create_a_prov = function(req, res) {
  MongoClient.connect(url)
  .then(function (db) 
  {	  		
  })
  .catch(function (err) { console.log(err);})
};

var read_a_prov = function(req, res) {
	console.log("holiii");
  MongoClient.connect(url)
  .then(function (db) 
  {	  	  			
	db.collection('providers').findById(req.params.providerId, function(err, provider) {
		console.log("providerId", req.params.providerId);
	    if (err)
	      res.send(err);
	    res.json(provider);
	}); 		
  })
  .catch(function (err) { console.log(err);})
};

var update_a_prov = function(req, res) {
  MongoClient.connect(url)
  .then(function (db) 
  {	  	  			
	db.collection('providers').remove({
    	_id: req.params.providerId
		}, function(err, provider) {
		    if (err)
		      res.send(err);
		    res.json({ message: 'Provider successfully deleted from Database' });
		});		
  })
  .catch(function (err) { console.log(err);})
};

var delete_a_prov = function(req, res) {
  MongoClient.connect(url)
  .then(function (db) 
  {	  	  			
	db.collection('providers').remove({
    	_id: req.params.providerId
		}, function(err, provider) {
		    if (err)
		      res.send(err);
		    res.json({ message: 'Provider successfully deleted from Database' });
		});		
  })
  .catch(function (err) { console.log(err);})
};


module.exports.list_all_provs = list_all_provs;
module.exports.read_a_prov = read_a_prov;
module.exports.update_a_prov = update_a_prov;
module.exports.delete_a_prov = delete_a_prov;


