var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var validator = require('validator');
var sendEmail = require("./lib/send-email.js");
var serveStatic = require("serve-static");
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(bodyParser.urlencoded({extended: true}));
app.use("/assets", serveStatic("./assets"));


app.get('/', function(req, res){
	res.render('form', {
		title: 'Feedback form',
		partials: {
			layout: 'layout'
		}
	});
});

app.post('/submit', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	if ((validator.isEmail(email)) && (name !== "") && (message !== "")) {
		// 5 sec timeout to show off the loader gif
		setTimeout(function(){
			sendEmail("Feedback", "From: " + name + "\nEmail: " + email + "\nMessage: " + message);
			res.send("Tiedot ovat oikein! animoituna");
		}, 5000);
	} else {
		res.send("Tiedot ovat väärin!");
	}
	
//	res.send(JSON.stringify(req.body));
});

app.listen(6500);