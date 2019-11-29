$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		if (_href == "#order_form") {
			var product = $(this).parent().find("h4").text();
			$("#order_form select[name='model'] option[value='"+product+"']").prop("selected", true);
		}
		return false;
	});

	/* sliders */

	$(".slider").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});

	$(".reviews_list").owlCarousel({
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		navText: "",
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: true,
				loop: true
			},
			640: {
				items: 2,
				margin: 20,
				nav: true,
				loop: true
			},
			960: {
				items: 3,
				margin: 20,
				nav: false,
				loop: false
			}
		}
	});

});