$('.menu').click(function () {
	$(this).toggleClass('open');
	$('.menu-open').toggleClass('open');
});
$('.menu-icon-close').click(function () {
	$('.menu-open').toggleClass('open');
	$('.menu').toggleClass('open');
});
if ($(window).width() <= 768) {
	$('.menu').addClass('open');
};