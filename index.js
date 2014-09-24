var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var validator = require('validator');
var sendEmail = require("./lib/send-email.js");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.render('form', {
		title: 'Feedback form',
		partials: {
			layout: 'layout'
		}
	});
});

app.post('/', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	if ((validator.isEmail(email)) && (name !== "") && (message !== "")) {
		sendEmail("Feedback", "From: " + name + "\nEmail: " + email + "\nMessage: " + message);
		res.send("Tiedot ovat oikein! animoituna");
	} else {
		res.send("Tiedot ovat väärin!");
	}
	
//	res.send(JSON.stringify(req.body));
});

app.listen(6500);
