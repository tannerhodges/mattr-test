/* Main Script
----------------------------------------------------------------------- */
$(document).ready(function() {

	/*
		Signup Form:
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
	/*  End Signup Form */


	/*
		Sticky Nav:
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
	/*  End Sticky Nav */


	/*
		Feature Rollovers:
		Quick custom script to update rollover images
	*/

	// Preload images
  // Gather image names and determine hover states
  var hoverImagesToPreload = new Array();
	$('.app-feature-image').each(function() {
    // Get image file path and add to array
    var imagePath = $(this).attr('src');
    hoverImagesToPreload.push( addHoverTextToImagePath( $(this).attr('src') ) );
	});
	// Preload images using array of hover states
	preloadImages(hoverImagesToPreload);

	// Change mouseover image
	$('.app-feature-image').mouseover(function() {
    $(this).attr('src', addHoverTextToImagePath( $(this).attr('src') ));
	// Reset image on mouseout
	}).mouseout(function() {
		$(this).attr('src', removeHoverTextFromImagePath( $(this).attr('src') ));
  });

  /*  End Feature Rollovers */

// End $(document).ready()
});



/* Functions
----------------------------------------------------------------------- */
// Validate email function
function validateEmail(email_address) {
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	if (filter.test(email_address)) {
		return true;
	} else {
		return false;
	}
};

// Preload images function
function preloadImages(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Add '-hover' to image paths
function addHoverTextToImagePath(imagePath) {
  // Rollover settings
  var fileType = '.png';		// File extension to search image path for
  var hoverText = '-hover';	// Text to insert before file extension (Assumes hover version exists)

  // Get position to insert hoverText
  var positionOfFileType = imagePath.indexOf(fileType);
  // Slice imagePath at positionOfFileType and insert hoverText in between path and file extension via join()
  var hoverPath = [imagePath.slice(0, positionOfFileType), hoverText, imagePath.slice(positionOfFileType)].join('');

  return hoverPath;
}

// Remove '-hover' from image paths
function removeHoverTextFromImagePath(imagePath) {
  // Rollover settings
  var fileType = '.png';		// File extension to search image path for
  var hoverText = '-hover';	// Text to insert before file extension (Assumes hover version exists)

  // Remove hoverText via replace()
	var resetImagePath = imagePath.replace(hoverText,'');

  return resetImagePath;
}