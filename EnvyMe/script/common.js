"use strict";

$(function(){
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });
    $('.rec-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    });
});