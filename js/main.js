$(document).ready(function() {

	/*
		Signup form at the top area:
		- Use AJAX script
		- Store email address and timestamp in a MySQL database
		- Include basic email validation
		- Confirm back to the user
	*/
	$('#email-signup button').bind('click', function(e) {
		e.preventDefault();

		// Store email address
		var email_address = 'test@testing.com';

		// AJAX call to store-email-address.php
		$.ajax({
			type: 'post',
			url: './includes/store-email-address.php',
			data: { 'email_address' : email_address }, 
			success: function(data) {
				console.log(data);
			},
			error: function(data) {
				console.log(data);
			}
		});
	});

	/*
		Sticky nav:
		- Changes slightly
		- Slowly motions down with user scrolling
	*/
	
});