jQuery(document).ready(function($){
	/*------------ Fade plugin Start ------------*/
	AOS.init();
	/*------------ Fade plugin End --------------*/

	/*------------ Hamburger Start ------------*/
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.menu-hide').toggleClass('on');
		$('body').toggleClass('scroll');
		if ($('body').hasClass('scroll')) {
			stop();
		} else {
			move();
		}
	})
	/*------------ Hamburger End --------------*/

	/*------------ Faq section Start ------------*/
	$('.faq-block').eq(0).addClass('opened');
	$('.faq-block').not(':eq(0)').find('.faq-block-text').hide();
	$('.circle-plus').on('click', function(){
		$(this).siblings('.opened').find('.faq-block-text').slideToggle();
		$(this).siblings('.opened').removeClass('opened');
		$(this).toggleClass('opened');
		$(this).find('.faq-block-text').slideToggle();
	})
	/*------------ Faq section End --------------*/
})

jQuery(window).scroll(function(event) {
	/*------------ Header BG Start ------------*/
	var windowScrollTop = jQuery(window).scrollTop();
	if (windowScrollTop > 50) {
		jQuery('header .nav').addClass('bg-white');
	} else {
		jQuery('header .nav').removeClass('bg-white');
	}
	/*------------ Header BG End --------------*/
});

/*------------ Disable Touch Event Start ------------*/
var mo=function(e){e.preventDefault()};

function stop(){
    document.addEventListener("touchmove",mo,false);
}

function move(){
    document.removeEventListener("touchmove",mo,false);
}
/*------------ Disable Touch Event End --------------*/
