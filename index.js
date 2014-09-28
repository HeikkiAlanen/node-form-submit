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

app.get('/success', function(req, res) {
	res.render('form_success', {
		title: 'Form success',
		messages: {
			messages: ['Form successfully sent.']
		},
		partials: {
			layout: 'layout'
		}
	});
});

app.post('/', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var errors = [];

	if (!validator.isLength(name, 3)) { errors.push('Name should be three characters minimum.'); }
	if (!validator.isEmail(email)) { errors.push('Please provide a valid email address.'); }
	if (!validator.isLength(message, 10)) { errors.push('Message should be 10 characters minumum.'); }

	if (errors.length) {
		res.render('form', {
			title: 'Form error',
			messages: {
				messages: errors,
				errors: true,
			},
			partials: {
				layout: 'layout'
			}
		});
	}
	else {
		sendEmail("Feedback", "From: " + name + "\nEmail: " + email + "\nMessage: " + message);
		res.redirect('/success');
	}
});

app.listen(6500);
