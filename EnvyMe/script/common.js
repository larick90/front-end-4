"use strict";

$(function(){
    //search
    $('.header-search-btn').on('click', function (ev) {
        ev.preventDefault();
        $('.header-search-in').toggle();
    });

    //burger-menu
    $('.burger-menu').on('click', function (ev) {
        ev.preventDefault();
        $('.header-menu').toggle();
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
        // autoplay: true,
        autoplay: false,
        arrows: false,
        responsive: [{
            breakpoint: 1120,
            settings: {
                slidesToShow: 3
            }
        },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1
                }
            }]
    });
});