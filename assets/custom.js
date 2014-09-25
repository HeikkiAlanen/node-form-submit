$(document).ready(function(){
	$("form").on("submit", function(event){
		event.preventDefault();
		var data = $(this).serialize();
		var submission = $.post("/submit", data);

		$(this).hide();
		$(".loader").show();

		submission.done(function(){
			$(".submit-message").text("Form succesfully submitted");
		});

		submission.fail(function(){
			$(".submit-message").text("Error submitting form!");
		});

		submission.always(function(){
			$(this).show();
			$(".loader").hide();
			$(".submit-message").show();
		});

	});
});
