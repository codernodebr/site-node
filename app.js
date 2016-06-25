var express = require('express');

var app = express();

var port = 5000;

app.listen(5000, function(err){
  console.log('Servidor funcionando na porta -> ' + port);
});