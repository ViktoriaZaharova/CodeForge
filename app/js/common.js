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
