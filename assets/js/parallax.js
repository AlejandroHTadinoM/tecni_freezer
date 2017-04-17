$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if ($(window).width() > 768) {
        $('.nav-wrapper').height($('nav').height());
    };
    if (wScroll <= servicePos) {
        $('.page-lead').css({
            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
        });
        $('header').css({
            'background-position': 'center ' + (-wScroll / 10) + '%' 
        });
    };
    if (wScroll > navPos) {
        $('.navbar').addClass('stk');
    } else {
        $('.navbar').removeClass('stk');
    };
    
    if (wScroll >= bannerHeight) {
        $('.menu').css({
            'box-shadow': '0 0 32px 2px rgba(0, 0, 0, .2)'
        });
    } else {
        $('.menu').css({
            'box-shadow': '0 0 32px 2px transparent'
        });
    };
});