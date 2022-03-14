$(function() {

  
   $('.footer__links-title').on('click', function(){ //сворачивает список под заголовком
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  $('.burger-menu').on('click', function(){
    $('.header-top__menu').toggleClass('header-top__menu--active')
  });
  $('.header-top__list-link').on('click', function(){
    $('.header-top__menu').removeClass('header-top__menu--active')
  });

  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    dots: true,
    appendArrows: $('.reviws__arrows'),
    appendDots: $('.reviws__dots'),
     
  });
});