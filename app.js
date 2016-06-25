var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){
  res.send('src/views/');
});

app.get('/get', function(req, res){
  res.send('Teste');
});

app.listen(5000, function(err){
  console.log('Servidor funcionando na porta -> ' + port);
});