// $(document).ready(function(){
//   $('.carousel__inner').slick({
//     speed: 1200,
//     prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_arrow.png"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.png"></button>',
//     responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             dots: true,
//             arrows: false
//          }
//       }
//     ]
//   });
// });
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false, 
    controls: false,   
    nav: false,
    responsive: {
      380: {
        nav: true,

      },
      700: {
        nav: true,

      },
      1366: {
        nav: false,
      },
      1000: {
        nav: false,
      },
    }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
})

$(document).ready(function(){
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass
      ('catalog__content_active');
  });
   $('.catalog-item__link',).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      });
    });
    $('.catalog-item__back').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      });
    });
    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
      });
    $('[data-modal=buy]').each(function(i){
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      });
    });
    $('input[name=phone]').mask("+380 (99) 999-99-99");
    $('#consultation form').validate({
      rules: {
        name: "required",
        phone: "required",
        email: "required"

      },
    });
    $('#order form').validate();
    $('#consultation-form').validate();
    
    $('form').submit(function(e){
     e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()

      }).done(function() {
          $(this).find("input").val(""); 
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
        return  false;
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.arrow-up').fadeIn();
      } else {
        $('.arrow-up').fadeOut();
      }
  });

  $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
    
});