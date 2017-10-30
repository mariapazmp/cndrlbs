// importar
var express = require('express');
 
// instanciar
var app = express();

app.use(express.static('public'));
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + 'home/index.html');
});
// escuchar
app.listen(9001);
 
console.log("Express Server listening in %s mode", app.settings.env);