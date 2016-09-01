

	/**
    * the Message
    */

	$(function() {
		$('.sign').on('submit', 'form', function(event) {
			event.preventDefault();
			var $Input = $('#m-email')

			if ( $Input.val().length !== 0 ) {
				alert('thank you for subscribing!');
				$Input.val('');
			} else {
				alert('Please input a valid email ');
			}
		});
	});
