export function SlickSlider() {
    var helpers = {
        addZeros: function (n) {
            return n < 10 ? '0' + n : '' + n;
        },
    };
    if ($.exists('.cs_slider')) {
        $('.cs_slider').each(function () {
            // Slick Variable
            var $ts = $(this).find('.cs_slider_container');
            var $slickActive = $(this).find('.cs_slider_wrapper');
            // Auto Play
            var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
            // Auto Play Time Out
            var autoplaySpdVar = 3000;
            if (autoPlayVar > 1) {
                autoplaySpdVar = autoPlayVar;
                autoPlayVar = 1;
            }
            // Slide Change Speed
            var speedVar = parseInt($ts.attr('data-speed'), 10);
            // Slider Loop
            var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
            // Slider Center
            var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
            // Variable Width
            var variableWidthVar = Boolean(
                parseInt($ts.attr('data-variable-width'), 10),
            );
            // Pagination
            var paginaiton = $(this)
                .find('.cs_pagination')
                .hasClass('cs_pagination');
            // Slide Per View
            var slidesPerView = $ts.attr('data-slides-per-view');
            if (slidesPerView == 1) {
                slidesPerView = 1;
            }
            if (slidesPerView == 'responsive') {
                var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
                var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
                var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
                var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
                var xsPoint = parseInt($ts.attr('data-xs-slides'), 10);
                var xxsPoint = parseInt($ts.attr('data-xxs-slides'), 10);
            }
            // Fade Slider
            var fadeVar = parseInt($($ts).attr('data-fade-slide'));
            fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);
            // Slick Active Code
            $slickActive.slick({
                centerMode: centerVar,
                autoplay: autoPlayVar,
                dots: paginaiton,
                speed: speedVar,
                infinite: loopVar,
                autoplaySpeed: autoplaySpdVar,
                fade: fadeVar,
                prevArrow: $(this).find('.cs_left_arrow'),
                nextArrow: $(this).find('.cs_right_arrow'),
                appendDots: $(this).find('.cs_pagination'),
                slidesToShow: slidesPerView,
                variableWidth: variableWidthVar,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: lgPoint,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: mdPoint,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: smPoint,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: xsPoint,
                        },
                    },
                    {
                        breakpoint: 180,
                        settings: {
                            slidesToShow: xxsPoint,
                        },
                    },
                ],
            });

            // Slider Number
            if ($(this).find('.slick_slide_in').length > 1) {
                $(this).siblings('.cs_slides_numbers').show();
            }
            $(this).on('afterChange', function (event, slick, currentSlide) {
                $(this)
                    .find('.cs_slides_numbers .active')
                    .html(helpers.addZeros(currentSlide + 1));
            });
            var sliderItemsNum = $(this)
                .find('.slick-slide')
                .not('.slick-cloned').length;
            $(this)
                .find('.cs_slides_numbers .cs_total_slide')
                .html(helpers.addZeros(sliderItemsNum));
        });
    }
}