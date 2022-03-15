//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

$('.btn-menu').on('click', function () {
   $(this).toggleClass('click');
   $('.mobile-menu').fadeToggle();
   $('.home').toggleClass('open-menu');
   $('header').toggleClass('open-menu');
});

$(document).ready(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        pointerEvents: true
    });
});

$('.form-quiz__content').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    appendArrows: '.form-quiz__nav',
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><span class="slick-arrow__text">Назад</span><span class="slick-arrow__icon"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="slick-arrow__text">Вперед</span><span class="slick-arrow__icon"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></span></button>'
});


$(".form-quiz__content").on("afterChange", function (event) {
    if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
        $('.form-quiz').addClass('form-quiz-result');
        $('.btn-presents').hide();
    }
});