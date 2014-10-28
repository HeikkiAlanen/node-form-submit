var Zepto = require("components~zepto@1.1.4");
var form = {};

form.autofocus = function() {
	var $form = $(".js-form-autofocus");
	var $inputFirst = $form.find("input").first();
	$inputFirst.focus();
};

module.exports = form;
