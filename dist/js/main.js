$(function () {
    var tourSwiper = new Swiper('.tour__slider', {
        slidesPerView: 'auto',
        spaceBetween: 60,
        centeredSlides: true,
        initialSlide: 1,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 165,
        },
    });

    var reviewsSwiper = new Swiper('.reviews__slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass, index, total) {
                return '<span class="' + currentClass + '">0 ' + index + ' </span>' +
                    '  ' +
                    '<span class="' + totalClass + '">0 ' + total + ' </span>';
            },
            formatFractionCurrent: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function (number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.menu__btn, .menu__close').on('click', function () {
        $('.menu__navigation, .menu__close').toggleClass('menu__navigation--active');
    });
});