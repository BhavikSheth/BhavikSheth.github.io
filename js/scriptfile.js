$(window).scroll(function() {
	var winTop = $(window).scrollTop(), docHeight = $(document).height(), winHeight = $(window).height();
	console.log(winTop, docHeight, winHeight);
	var scrolled = winTop/(docHeight-winHeight)*100;
	$('#scroll-line').css('width', (scrolled + '%'));
});

