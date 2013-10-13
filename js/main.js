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
					$('#email-submit').addClass('success').text('✓ Requested');
					$('#email-result').html('Congratulations,<br /> you\'re now on our beta request list.').animate({opacity: 1}, 300);
				},
				error: function() {
					// Display error message
					console.log('Sorry, there was an error in your submission');
					$('#email-result').html('Sorry,<br /> there was an error in your submission').animate({opacity: 1}, 300);
				}
			});
		} else {
			// Display "invalidity" message
			console.log('Sorry, your email address isn\'t registering as valid.');
			$('#email-result').html('Sorry,<br /> your email address isn\'t registering as valid.').animate({opacity: 1}, 300);
		}
	});	


	/*
		Sticky nav:
		- Changes slightly
		- Slowly motions down with user scrolling
	*/
	$(window).scroll(function() {
		var a = $(window).scrollTop(),
	  b = $(".main-content");
		$("body");
		0>=b.offset().top-a?$("#sticky-nav").removeClass("invisible hide").addClass("show"):$("#sticky-nav").removeClass("show").addClass("hide")
	});

	// Hide sticky-nav once request-invite is clicked
	$('#request-invite').on('click', function() {
		$('#sticky-nav').removeClass('show').addClass('hide');
		$('#email-address').focus();
	});

// End $(document).ready()
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