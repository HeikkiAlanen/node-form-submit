var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var validator = require('validator');
var sendEmail = require("./lib/send-email.js");
var serveStatic = require("serve-static");
var sanitizer = require('sanitizer');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(bodyParser.urlencoded({extended: true}));
app.use("/assets", serveStatic("./assets"));
app.use("/build", serveStatic("./build"));


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
		messages: [{
			message: 'Form successfully sent.',
			type: 'success'
		}],
		partials: {
			layout: 'layout'
		}
	});
});

app.post('/', function(req, res) {
	var name = sanitizer.escape(req.body.name);
	var email = sanitizer.escape(req.body.email);
	var message = sanitizer.escape(req.body.message);
	var errors = [];

	if (!validator.isLength(name, 3)) {
		errors.push({
			message:'Name should be three characters minimum.',
			type: 'error'
		});
	}
	if (!validator.isEmail(email)) {
		errors.push({
			message: 'Please provide a valid email address.',
			type: 'error'
		});
	}
	if (!validator.isLength(message, 10)) {
		errors.push({
			message: 'Message should be 10 characters minimum.',
			type: 'error'
		});
	}

	if (errors.length) {
		res.render('form', {
			title: 'Form error',
			messages: errors,
			form: {
				name: name,
				email: email,
				message: message
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
