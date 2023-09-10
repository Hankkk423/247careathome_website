
// Handle Overlay
var handleOverlay = function () {
    var overlay = $('.js__bg-overlay'),
        headerOverlay = $('.js__header-overlay'),
        trigger = $('.js__trigger');

    trigger.on('click', function () {
        overlay.toggleClass('-is-open');
        headerOverlay.toggleClass('-is-open');
        trigger.toggleClass('-is-active');
    });
}


// Handle CounterUp
var handleCounterUp = function () {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
}



// Handle Owl Carousel
var handleOwlCarousel = function () {
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
}




$(document).ready(function () {
    handleOverlay();
    handleCounterUp();
    handleOwlCarousel();
});