
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
	$('.link li a'&&'.link a').click(function (){
		$('html,body').animate({
			scrollTop:$('#' + $(this).data ('value')).offset().top
		} ,1000);
	});




/******* flickity ****** */
$('.carousel').flickity({
	cellAlign:'right',
	cotanin: true,
	wrapAround:true,
	prevNextButtons:false,
	autoPlay:true,
	imageLoaded:true
});


/*********go toThe  main bar */

// 	$(function() {
// 		$('a[href^="#"]').not("a[href='#']").click(function() {
// 		   $("#"+$(this).attr("href").slice(1)+"").focus();
// 		});
// 	});

}(jQuery));



