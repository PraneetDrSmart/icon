$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true, // Set arrows to true
        prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Custom HTML for previous arrow button
        nextArrow: '<button type="button" class="slick-next">Next</button>', // Custom HTML for next arrow button
        dots: true
    });
});
