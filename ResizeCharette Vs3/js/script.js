$(document).ready(function() {

	$('#width375').click('click touchstart', function() {
		$( this ).animate({opacity: "0.5"}, 500);
	});

	$('#width575').click('click touchstart', function() {
		$( this ).animate({top: "+=50px"}, 500);
		$( this ).animate({top: "-=50px"}, 1000);
	});




});

