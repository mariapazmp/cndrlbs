var express = require('express'),
  app = express(),
  port = process.env.PORT || 9002,
  bodyParser = require('body-parser');
 /* mongoose = require('mongoose'),
 //Provider = require('./api/models/apiModel'),

// Connection
mongoose.Promise = global.Promise;*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//var dbconfig = require('./dbconfig.js');
//dbconfig.mongoConnect();

// Routes
var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});