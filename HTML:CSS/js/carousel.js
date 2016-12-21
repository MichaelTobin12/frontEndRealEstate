$(document).ready(function() {


	$(window).scroll(function() {
		let scroll = $(window).scrollTop();
		let navBarMarginFix = document.getElementsByClassName("marginBottomScrollChange")[0];
		scroll > 9 ? $(navBarMarginFix).animate({marginBottom: "0px"}, 100) : $(navBarMarginFix).animate({marginBottom: "20px"}, 100);
	});

	$(function() {
		$('#carousel-example-generic').carousel();
	});

});
