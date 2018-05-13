jQuery(document).ready(function($){
	AOS.init();
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.menu-hide').toggleClass('on');
		$('body').toggleClass('scroll');
	})
	$('.faq-block').eq(0).addClass('opened');
	$('.faq-block').not(':eq(0)').find('.faq-block-text').hide();
	$('.circle-plus').on('click', function(){
		$(this).siblings('.opened').find('.faq-block-text').slideToggle();
		$(this).siblings('.opened').removeClass('opened');
		$(this).toggleClass('opened');
		$(this).find('.faq-block-text').slideToggle();
	})
})

jQuery(window).scroll(function(event) {
	var windowScrollTop = jQuery(window).scrollTop();
	if (windowScrollTop > 50) {
		jQuery('header .nav').addClass('bg-white');
	} else {
		jQuery('header .nav').removeClass('bg-white');
	}
});