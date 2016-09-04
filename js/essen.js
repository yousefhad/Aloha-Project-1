
(function ($) {
	'use strict';

	/**
    * subscribing ask or thank message
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

/******** cart  counter */

$(function(){


var numItems = 0;
$('.carousel button').on('click' , function(event){

event.preventDefault();
numItems++;
$('.cart-count').text(numItems).fadeIn(1000)
});

});



/******** smooth scrolling ****** */
	$(function(){
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash,
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});
	});




/******* flickity ****** */

	$(function() {
		$('.carousel').flickity({
			cellAlign: 'left',
			contain: true,
			percentPosition: false,
			imagesLoaded: true,
			autoPlay: true,
			prevNextButtons: false
		});
	});



/*********go toThe  main bar */

	$(function() {
		$("a[href='#']").click(function() {
		   $("#"+$(this).attr("href").slice(1)+"").focus();
		});
	});

}(jQuery));
