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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
});



