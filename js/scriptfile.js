$(window).scroll(function() {
	var winTop = $(window).scrollTop(), docHeight = $(document).height(), winHeight = $(window).height();
	console.log(winTop, docHeight, winHeight);
	var scrolled = winTop/(docHeight-winHeight)*100;
	$('#scroll-line').css('width', (scrolled + '%'));
});
/*
$(document).ready(function() {
  $(".scroll").click(function(event) {
    event.preventDefault();
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
    $('.navbar-default a').removeClass('selected');
    $(this).addClass('selected');
  });
});
*/