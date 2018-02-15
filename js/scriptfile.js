

// Scroll Line below navigation
$(window).scroll(function() {
	var winTop = $(window).scrollTop(), docHeight = $(document).height(), winHeight = $(window).height();
	var scrolled = winTop/(docHeight-winHeight)*100;
	$('#scroll-line').css('width', (scrolled + '%'));
});

// Smooth Scrolling
$(document).ready(function() {
	$('ul').find('a').click(smoothScroll);
	$('.about-text').find('a').click(smoothScroll);
});

function smoothScroll() {
	var $href = $(this).attr('href');
	var $anchor = $($href).offset();
	$('html, body').animate({ scrollTop: $anchor.top-40 }, 1000);
}