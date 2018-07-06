var main = function() {
	$(window).scroll(function() {

	   var hT = $('#scroll-to').offset().top,
	   	   hTTwo = $('#scroll-to-two').offset().top,
	       wH = window.innerHeight,
	       wS = $(this).scrollTop();
	   if (wS > (hT-wH)){
	   		if (wS > (hTTwo-wH)) {
	   			styleForSectionThree();
	   		}
	   		else {
				styleForSectionTwo();
	   		}
	   } else {
	   		styleForSectionOne();
	   }
	});
};

var styleForSectionOne = function () {
	$('body').css('background', 'white');
	$('.first-text-scroll').css('opacity', '1');
	$('.second-text-scroll').css('opacity', '0');
	$('.third-text-scroll').css('opacity', '0');
};

var styleForSectionTwo = function () {
	$('body').css('background', '#008080');
	$('.first-text-scroll').css('opacity', '0');
	$('.second-text-scroll').css('opacity', '1');
	$('.third-text-scroll').css('opacity', '0');
};

var styleForSectionThree = function () {
	$('body').css('background', '#00ffff');
	$('.first-text-scroll').css('opacity', '0');
	$('.second-text-scroll').css('opacity', '0');
	$('.third-text-scroll').css('opacity', '1');
};

$(document).ready(main);


