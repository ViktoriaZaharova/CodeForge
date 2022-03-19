//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - 40}, 500);

        $('.mobile-menu').fadeOut();
        $('.home').removeClass('open-menu');
        $('header').removeClass('open-menu');
        $('body').removeClass('no-scroll');
        $('.btn-menu').removeClass('click');

        return false;

    });
});
//плавный скролл end

$('.btn-menu').on('click', function () {
    $(this).toggleClass('click');
    $('.mobile-menu').toggleClass('open-menu');
    $('.home').toggleClass('open-menu');
    $('header').toggleClass('open-menu');
    $('body').toggleClass('no-scroll');
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
        $('.form-quiz__nav').hide();
    }
    if ($(this).find('.slick-dots li').first().hasClass('slick-active')) {
        $('.form-quiz__nav').css('display', 'flex');
    }
});

$('#someTab').tab();