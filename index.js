var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

var txtHeader = fs.readFileSync('./views/globals/header.html', encoding='utf8');
var txtForm = fs.readFileSync('./views/form.html', encoding='utf8');
var txtFooter = fs.readFileSync('./views/globals/footer.html', encoding='utf8');

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send(txtHeader + txtForm + txtFooter);
});

app.post('/', function (req, res) {
  var email = req.params.email;
  var name = req.params.name;
  console.log(req.params);
  console.log(name);
  res.send("success");
});

app.listen(6500);
