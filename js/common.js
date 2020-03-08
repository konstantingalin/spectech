$(function() {
	
	$('#my-menu').mmenu(
	{
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
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
		
});
