$(document).ready(function() {
	let contactForm = document.getElementById("contactFormId");
	let firstName = document.getElementsByClassName("inputSize")[0];
	let lastName = document.getElementsByClassName("inputSize")[1];
	let email = document.getElementsByClassName("inputSize")[2];
	let phone = document.getElementsByClassName("inputSize")[3];
	let zip = document.getElementsByClassName("inputSize")[4];
	let reason = document.getElementsByClassName("inputSize")[5];
	let message = document.getElementById("userMessageId");

	$(window).scroll(function() {
		let scroll = $(window).scrollTop();
		let navBarMarginFix = document.getElementsByClassName("marginBottomScrollChange")[0];
		scroll > 9 ? $(navBarMarginFix).animate({marginBottom: "0px"}, 100) : $(navBarMarginFix).animate({marginBottom: "20px"}, 100);
	});

	$(function() {
		$('#carousel-example-generic').carousel();
	});

	$(contactForm).submit(function(event) {
		let contactObj = {};

		contactObj.firstName = $(firstName).val();
		contactObj.lastName = $(lastName).val();
		contactObj.email = $(email).val();
		contactObj.phone = $(phone).val();
		contactObj.zip = $(zip).val();
		contactObj.reason = $(reason).val();
		contactObj.message = $(message).val();

		$.ajax({
			url: "michaeltobin.us/#/contact/incoming",
			type: 'post',
			data: contactObj,
			success: function(data) {
				console.log(data);
			}
		}).done(function() {
			alert('Finished')
		})
		event.preventDefault();
	})
});
