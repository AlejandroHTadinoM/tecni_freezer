//Possitions
var navPos = $('.navbar').offset().top;
var servicePos = $('.service').offset().top;
//Dimentions
var windowHeight = $(window).height();
var bannerHeight = $('header').height();
var brandHeight = $('.brand').height();
//Items
var $navbarItem = $('nav').find('li');
$('nav').wrap('<div class="nav-wrapper"></div>');
var footer = $('footer');
var footerItems = footer.find('a');
// Slider
var 
	sliderContainer = $('.brands'),
	slider = sliderContainer.find('ul'),
	slide = slider.find('li'),
	slideW = slide.find('img').width(),
	timer,
	cSlide = 0;
	