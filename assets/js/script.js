
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


// Handle CounterUp (require "waypoint.js" and "counterup.js")
var handleCounterUp = function () {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
}



// Handle Owl Carousel (require "owlcarousel.js" and "bootstrap-icons.css(bi-arrow)")
var handleOwlCarousel = function () {
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
}



// Handle Wow Animation (require "animate.css" and "wow.js")
var handleWow = function () {
    // Initiate the wowjs
    new WOW().init();
}


// Handle Dynamic Typing (require "typed.js")
var handleTyped = function () {
    // // Typed.js for dynamic typing
    // var typed = new Typed('#typed', {
    //     stringsElement: '#typed-strings', // ID of the element containing your strings
    //     typeSpeed: 50, // Typing speed in milliseconds
    //     backSpeed: 30, // Backspacing speed in milliseconds
    //     backDelay: 1000, // Delay before starting to backspace
    //     loop: true // Loop the typing animation
    // });

    // Initialize Typed.js for each element with the class "typed-text"
    // $('.typed-text').each(function () {
    //     var typed = new Typed($(this).find('#typed'), {
    //         stringsElement: $(this).find('#typed-strings'),
    //         typeSpeed: 50,
    //         backSpeed: 30,
    //         backDelay: 1000,
    //         loop: true
    //     });
    // });


    // Get all elements with the class "typed-text"
    var typedTextElements = document.querySelectorAll('.typed-text');
    // Initialize Typed.js for each element
    typedTextElements.forEach(function (element) {
        var typed = new Typed(element.querySelector('#typed'), {
            stringsElement: element.querySelector('#typed-strings'),
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
            // showCursor: false // Hide the cursor
        });
    });

}





$(document).ready(function () {
    handleOverlay();
    handleCounterUp();
    handleOwlCarousel();
    handleWow();
    handleTyped();
});