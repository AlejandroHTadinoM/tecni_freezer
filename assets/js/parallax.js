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