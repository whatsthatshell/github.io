/*********************************************************************************

  Template Name: JuniorHome Day Care  Bootstrap 4 Template  
  Template URI: https://themeforest.net/user/hastech
  Description: JuniorHome is a beautifula and unique Day Care Bootstrap 4 template.
  Author: HasTech
  Author URI: https://hastech.company/
  Version: 1.0

  Note: This is style css.


**********************************************************************************/


/*===============================================================================
      [ INDEX ]
=================================================================================

  Scroll Up Activation
  Mobile Menu
  Wow Active
  Youtub Popup
  Testimonial Activation 01
  Testimonial Activation 02 
  Testimonial Activation 03
  Testimonial Activation 04
  Arrinval Product Activation 
  Sticky Header
  Counter Up
  Popular Activation
  Event Activation
  Event Activation 02 
  Gallery Mesonry Activation
  Blog Thumb Activation
  Home Slider Activation
  Register Form
  Login Form
  Checkout Login/Register Toggle
  Checkout Shipping Form Toggle
  Payment Method Toggle
  Home Slider With Carosel
  Countdown
  Blog Share Activation



=================================================================================
      [ END INDEX ]
================================================================================*/

(function ($) {
  'use strict';






  /*=========== Mobile Menu ===========*/

  $('nav.mainmenu__nav').meanmenu({
    meanMenuClose: 'X',
    meanMenuCloseSize: '18px',
    meanScreenWidth: '991',
    meanExpandableChildren: true,
    meanMenuContainer: '.mobile-menu',
    onePage: true
  });


  /*=============  Gallery Mesonry Activation  ==============*/

  $('.gallery__masonry__activation').imagesLoaded(function () {

    // filter items on button click
    $('.gallery__menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

    // change is-checked class on buttons
    $('.gallery__menu button').on('click', function () {
      $('.gallery__menu button').removeClass('is-checked');
      $(this).addClass('is-checked');
      var selector = $(this).attr('data-filter');
      $containerpage.isotope({
        filter: selector
      });
      return false;
    });

    // init Isotope
    var $grid = $('.masonry__wrap').isotope({
      itemSelector: '.gallery__item',
      percentPosition: true,
      transitionDuration: '0.7s',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      }
    });


  });



  /*=============  Blog Thumb Activation  ==============*/
  
  $('.blog__thumb__active').slick({
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slideToScroll: 1,
    fade: true,
    speed: 600,
    prevArrow: '<button class="dcare-arrow dacre-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="dcare-arrow dcare-next"><i class="fa fa-angle-right"></i></button>',
  });


  /*=============  Home Slider Activation  ==============*/

  $('.slide--active').slick({
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slideToScroll: 1,
    fade: true,
    speed: 600,
    prevArrow: '<button class="dcare-arrow dacre-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="dcare-arrow dcare-next"><i class="fa fa-angle-right"></i></button>',
  });





  /*============= Home Slider With Carosel ==============*/

  if ($('.slide__carosel').length) {
    $('.slide__carosel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplayTimeout: 10000,
      items: 1,
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
      }
    });
  }


})(jQuery);