/* carousel functionality added */
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        accessibility: true,
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true
                }
            }
        ]
    });

    // Set focus to the slider container on page load
    $('.slider').on('init', function (event, slick) {
        setTimeout(function () {
            slick.$slider.attr('tabindex', 0).focus();
        }, 0);
    });

    // Additional event listener to ensure focus is on the slider after initialization
    $('.slider').focus(function () {
        $(this).slick('slickGoTo', $(this).slick('slickCurrentSlide'));
    });

    // Enable keyboard navigation
    $(document).on('keydown', function (e) {
        var $slider = $('.slider');
        if ($slider.is(':focus')) {
            switch (e.key) {
                case 'ArrowLeft':
                    $slider.slick('slickPrev');
                    break;
                case 'ArrowRight':
                    $slider.slick('slickNext');
                    break;
            }
        }
    });

});
