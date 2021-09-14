$(document).ready(function(){
    $('.slider-section__inner').slick({
        speed: 1500,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/prev_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/next_arrow.png"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false
              }
            },
          ]
    });
  });