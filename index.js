var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(bodyParser.urlencoded());

app.get('/', function(req, res){
	res.render('form', {
		title: 'Feedback form',
		partials: {
			layout: 'layout'
		}
	});
});

app.post('/', function (req, res) {
	res.send(JSON.stringify(req.body));
});

app.listen(6500);
