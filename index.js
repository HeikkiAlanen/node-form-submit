var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.get('/', function(req, res){
	res.render('form', {
		title: 'Feedback form',
		partials: {
			layout: 'layout'
		}
	});
});

app.listen(6500);
