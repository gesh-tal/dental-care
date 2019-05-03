
$(document).ready(function(){

	$('.mobile_menu_icon').on('click', () => {
		$('.nav_menu_mobile').css('display', 'flex');
	});

	$('#mobile_menu_icon').click(function(){
	    $('.nav_menu_mobile').animate({
	        height: 'toggle',
	        opacity: 'toggle'
	    });
	});

	$(() => {
		$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();

		const ref = $(this).attr("href"),
		      pos = $(ref).offset().top;

		$('html, body').animate({scrollTop: pos}, 1000);
		});
	});

	$('.nav_link').on('click', () => {
		$('.nav_menu_mobile').fadeOut(1000);
	})

  	$("#carousel").owlCarousel({
  		items: 3,
  		autoPlay: 3500,
  		pagination: false,
  		// navigation: true,
  		// navigationText: ["<",">"],
  		itemsDesktop: [1199,3],
  		itemsDesktopSmall: [979,2],
  		itemsTablet: [768,1]
  	});

  	document.querySelector("#today").valueAsDate = new Date();
  	
});