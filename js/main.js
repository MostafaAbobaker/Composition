/*global $*/
$("document").ready(function () {
    "use strict";
    $(".btn-navbar").click(function () {
        $(this).toggleClass("change");
    });
    $(".btn-navbar").click(function () {
        $(".navbar").slideToggle();
    });
    $('.lazy').slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
});