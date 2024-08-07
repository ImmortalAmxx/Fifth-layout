$(document).ready(function() {
  $('.burger-menu').on('click', function() {
    $('.nav-item').toggleClass('active');
    $('.burger-icon').toggleClass('active');
  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }
  });
});