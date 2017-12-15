"use strict";

$(function(){
    //search
    $('header-search').on("click", function () {

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
        arrows: false
    });
});