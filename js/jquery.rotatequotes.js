(function($) {
	$.fn.rotateQuotes = function(options) {
		'use strict';

		var settings   		= $.extend({}, $.fn.rotateQuotes.defaults, options);
		var quotes     		= $(this);
		var firstQuote 		= quotes.first();
		var lastQuote  		= quotes.last();
		var remainingQuotes = [];
		var nextQuote;
		var interval; // For animation

		startAnimation();

		// Attach listener for hoverpause
		if(settings.hoverpause) {
			$("#quotes").hover(function(){	
			    pauseAnimation();
			}, function(){
				startAnimation();
			});
		}

		function startAnimation(){
			animation();
		    interval = setInterval(animation, settings.delay);
		}

		function pauseAnimation(){
			clearInterval(interval);
		}

		function randomizeArray(arr) {
			arr.sort(function() {
				return Math.random() - 0.5;
			});
		}

		function getNextQuote() {
			if(remainingQuotes.length == 0){
				for(var i = 0; i < quotes.length; i++) { // Place numbers backwards so the quotes are popped in order
					remainingQuotes[i] = quotes.length - (i + 1); 
				}
				if(settings.random) 
					randomizeArray(remainingQuotes);
			}
			return quotes[remainingQuotes.pop()];
		}

		function animation(){
			nextQuote = getNextQuote();

			$(quotes).filter(':visible').fadeOut(settings.speed / 2);
			if($(lastQuote).is(':visible')) {
				setTimeout(function() {
					$(firstQuote).fadeIn(settings.speed / 2);
				}, settings.speed);
			} else {
				setTimeout(function() {
					$(nextQuote).fadeIn(settings.speed / 2);
				}, settings.speed);
			}
		}

		return this; // Return jQuery object for chaining
	};

	$.fn.rotateQuotes.defaults = {
		speed: 		700, 
		delay: 		5000,
		hoverpause: false,
		random: 	false
	}
})(jQuery);