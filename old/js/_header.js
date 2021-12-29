$(document).ready(() => {

    $('.header__burger-img').click(() => {
        $('.burger').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('.burger__close-btn').click(() => {
        $('.burger').removeClass('active');
        $('body').css('overflow', '');
    });

    $('.header__search > .search-btn').click(e => {
        $('.header__search > input[type="search"]').toggleClass('active');
    });

    $('.header__search').submit(() => {
        $('.header__search > input[type="search"]').removeClass('active');
    });

});