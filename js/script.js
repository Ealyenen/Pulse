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

    function toggleTabItem(item){
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog__first-screen').eq(i).toggleClass('catalog__first-screen_active');
          $('.catalog__second-screen').eq(i).toggleClass('catalog__second-screen_active');
        })
      });
    };
    toggleTabItem('.catalog__descr-link');
    toggleTabItem('.catalog__descr-link-back');


    //modal windows

$('[data-modal=consultation]').on('click', function(){
  $('.overlay, #consultation').fadeIn('0.5s');
});
$('.modal__close').on('click', function(){
  $('.overlay, #consultation, #done').fadeOut('0.5s')
  });

  
$('.catalog__btn').each(function(i){
  $(this).on('click', function(){
      $('#order .modal__subtitle').text($('.catalog__title').eq(i).text());
      $('.overlay, #order').fadeIn('0.5s');
  });
});

function validform(form){
  $(form).validate({
    errorClass: "error",
    rules:{
      name: {
        required: true,
        minlength: 5
      },
      tel: 'required',
      email: {
        required: true,
        email: true
        }
      },
      messages: {
        name: {
          required: "введите имя",
          minlength: jQuery.validator.format("минимум {0} символов требуется")
        },
        tel: "пожалуйста введите свой номертелефон",
        email: {
          required: "пожалуйста, введите свою почту",
          email: "Неправельно введен адрес почты"
          }
        }
});
}
validform('#cons-form')
validform('#consultation form')
validform('#order form')


$('input[name=tel]').mask("+7 (999) 999 99-99");


});
