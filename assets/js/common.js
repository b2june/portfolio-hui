'use strict';
{
  $(function(){
    // header__btn & menu
    $('.header__menubtn').on('click', function(){
        $('.nav').toggleClass('active');
    }); 
    
    $('.nav__close, .nav__item a').on('click', function(){
        $('.nav').removeClass('active');
    });
    
    // slick
    $('.slick__list').slick({
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings:{
                    slidesToShow: 1,
                },
            },
        ],
    });

  });

}