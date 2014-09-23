var express = require('express');
var fs = require('fs');

var app = express();

var txtHeader = fs.readFileSync('./views/globals/header.html', encoding='utf8');
var txtForm = fs.readFileSync('./views/form.html', encoding='utf8');
var txtFooter = fs.readFileSync('./views/globals/footer.html', encoding='utf8');

app.get('/', function(req, res){
  res.send(txtHeader + txtForm + txtFooter);
});

app.listen(6500);
