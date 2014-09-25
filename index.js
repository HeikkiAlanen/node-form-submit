var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(bodyParser.json())

app.get('/', function(req, res){
	res.render('form', {
		title: 'Feedback form',
		partials: {
			layout: 'layout'
		}
	});
});

app.post('/', function (req, res) {
  var email = req.params.email;
  var name = req.params.name;
  console.log(req.body("name"));
  console.log(name);
  res.send("success");
});

app.listen(6500);
