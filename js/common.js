$(function() {
	
	$('#my-menu').mmenu(
	{
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		offCanvas: {
			"position": "right"
		}
	});
	
	$('.owl-carousel').owlCarousel({
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
	
	
		
});
