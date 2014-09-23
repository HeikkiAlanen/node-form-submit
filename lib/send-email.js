var nodemailer = require("nodemailer");
var fs = require("fs");

var getConfiguration = function (callback) {
	fs.readFile("./email.conf", function(err, data){
		var json = JSON.parse(data);
		return callback(json);
	});
};

var getReceiver = function(callback) {
	fs.readFile("./package.json", function(err, data){
		var json = JSON.parse(data);
		callback(json);
	});
};

var createTransport = function (options) {
	var transporter = nodemailer.createTransport({
		service: options.transport,
		auth: {
			user: options.sender_address,
			pass: options.password
		}
	});

	return transporter;
};

var sendEmail = function(messageSubject, messageText) {
	getConfiguration(function(options){
		var transporter = createTransport(options);
		getReceiver(function(package_json) {
			var receiver = package_json["form-email"];
			var sendOptions = {
				from: options.sender_address,
				to: receiver,
				subject: messageSubject,
				text: messageText
			};
			transporter.sendMail(sendOptions);
		});
	});
};

module.exports = sendEmail;
