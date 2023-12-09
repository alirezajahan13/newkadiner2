var $ = jQuery;
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
});
$(document).ready(function(){
  $('.faq > .question').click(function(){
    $('.faq > .answer').slideUp(300);
    if ($(this).siblings(".answer").css('display') == 'block') {
        $(this).siblings('.answer').slideUp(500);
        $('#openCloseFaq #closeFaq').hide(200);
        $('#openCloseFaq #openFaq').show(200);
    } else {
        $(this).siblings('.answer').slideToggle(500);
        
        $('#openCloseFaq #openFaq').hide(200);
        $('#openCloseFaq #closeFaq').show(200);
    }
  });
});
