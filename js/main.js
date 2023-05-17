$(function () {
    $('.topBanner .inner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    $('.mainSlide').slick({
        arrows: false,
        dots: true,
    });
})

