$(function() {
	
	$('#my-menu').mmenu(
	{
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="../img/logo_burger.svg" alt="Логотип">'
		},
		offCanvas: {
			"position": "right"
		}
	});
	
	$('.feedback__content').owlCarousel({
    loop:true,
    margin: 48,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
            dots:true,
            loop:true
        }
    }
});
	
	$('.equipment__carousel').owlCarousel({
    loop:true,
    margin: 48,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:true,
            loop:true
        },
		 631: {
			 dots: false
		 }
    }
});
	
	$('.popup').magnificPopup();
	$('.popup2').magnificPopup();
	
	$("#my-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	
	$(".header__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	
	$(".footer__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.popup2').click();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
		
});
