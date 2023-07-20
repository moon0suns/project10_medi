
$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })


    $('.main_slide').slick({
        autoplay: true,
        autopalySpeed: 5000,
        speed: 200,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    const spaceSlide = new Swiper('.space_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            //disableOnInteraction: false,
        },

        // 반응형갔을때
        breakpoints: {
            768: {
                slidesPerView: 2.5,
            },

        },
    })

    $('.space_slide .arrows .left').on('click', function () {
        spaceSlide.slidePrev();
    });

    $('.space_slide .arrows .right').on('click', function () {
        spaceSlide.slideNext();
    });



    const docSlide = new Swiper('.doctor_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            //disableOnInteraction: false,
        },

        pagination: {
            el: ".sbar",
            type: "progressbar",
        },

        // 반응형갔을때
        breakpoints: {
            768: {
                slidesPerView: 4,
            },

        },
    })

    $('.main_doctor .arrows .left').on('click', function () {
        docSlide.slidePrev();
    });

    $('.main_doctor .arrows .right').on('click', function () {
        docSlide.slideNext();
    });







    // 스크롤 업
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    //   스크롤없애는거
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // 첫번째방법 sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 2000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })


    AOS.init();

    // 📳 반응형

    // 2 서부메뉴 누르면 나오게
    $('.header .gnb>ul>li').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).find('.sub').stop().slideToggle();
        }

    });

    // 3 클릭햇을때 메뉴 나오게
    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    });


    //pc버전에서 오류작동 잡기
    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    })
})
