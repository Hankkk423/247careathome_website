
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


// HandleCounterUp
var handleCounterUp = function () {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
}



$(document).ready(function () {
    handleOverlay();
    handleCounterUp();
});