$(document).ready(() => {

    $('.start-page .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });

});

