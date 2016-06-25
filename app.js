var express = require('express');

var app = express();

var port = 5000;

app.get('/', function(req, res){
  res.send('Olá Mundo :)');
});

app.get('/livros', function(req, res){
  res.send('Olá Livros!');
});

app.listen(5000, function(err){
  console.log('Servidor funcionando na porta -> ' + port);
});