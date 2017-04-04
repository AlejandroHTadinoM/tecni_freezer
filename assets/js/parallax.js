$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.nav-wrapper').height($('nav').height());
    if (wScroll <= bannerHeight) {
        $('.page-lead').css({
            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
        });
        $('header').css({
            'background-position': 'center ' + (wScroll / 6) + '%' 
        });
    };
    if (wScroll > navPos) {
        $('.navbar').addClass('stk');
    } else {
        $('.navbar').removeClass('stk');
    }
});