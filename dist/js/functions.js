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
$('.nav-item a').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.nav-wrapper').height($('nav').height());
    if (wScroll <= servicePos) {
        $('.page-lead').css({
            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
        });
        $('header').css({
            'background-position': 'center ' + -(wScroll / 10) + '%' 
        });
    };
    if (wScroll > navPos) {
        $('.navbar').addClass('stk');
    } else {
        $('.navbar').removeClass('stk');
    }
});