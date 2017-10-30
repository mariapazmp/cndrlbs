var express = require('express'),
  app = express(),
  port = process.env.PORT || 9002,
  mongoose = require('mongoose'),
  Record = require('./api/models/apiModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Apidb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);