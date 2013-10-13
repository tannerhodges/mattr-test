$(document).ready(function() {

	/*
		Signup form at the top area:
		- Use AJAX script
		- Store email address and timestamp in a MySQL database
		- Include basic email validation
		- Confirm back to the user
	*/
	$('#email-signup').submit( function( event ) {
		// Stop the page from refreshing
		event.preventDefault();

		// Store email address
		var email_address = $('#email-address').val();

		// If the email is valid, then process it
		if (validateEmail(email_address)) {
			var action = $(this).attr('action');

			// Make AJAX request
			$.ajax({
				url: action,
				type: 'POST',
				data: {
					'email_address' : email_address
				},
				success: function(data) {
					// Display success message
					console.log('✓ Requested');
				},
				error: function() {
					// Display error message
					console.log('Sorry, there was an error in your submission');
				}
			});
		} else {
			// Display "invalidity" message
			console.log('Sorry, your email address isn\'t registering as valid.');
		}
	});

	/*
		Sticky nav:
		- Changes slightly
		- Slowly motions down with user scrolling
	*/
	
});

// Validate email function
function validateEmail(email_address) {
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	if (filter.test(email_address)) {
		return true;
	} else {
		return false;
	}
};