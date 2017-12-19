"use strict";

$(function(){
    //search
    $('.header-search-btn').on('click', function (ev) {
        ev.preventDefault();
        $('.header-search-in').toggle();
    });

    //sliders
    $('.slider').slick({
        autoplay: true,
        arrows: false
    });
    $('.rec-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1080,
            settings: {
                slidesToShow: 3
            }
        },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }]
    });
});