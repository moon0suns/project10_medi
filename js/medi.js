
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

    const foodSlide = new Swiper('.food_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        // 반응형갔을때
        breakpoints: {
            768: {
                slidesPerView: 3,
            },

        },
    })

})
