$(document).ready(function() {
  $('.burger-menu').on('click', function() {
    var $navItem = $('.nav-item');
    var $burgerIcon = $('.burger-icon');

    if ($navItem.hasClass('active')) {
      $navItem.removeClass('active');
      setTimeout(function() {
        $navItem.css('display', 'none');
      }, 300);
    } else {
      $navItem.css('display', 'flex');
      setTimeout(function() {
        $navItem.addClass('active');
      }, 10);
    }

    $burgerIcon.toggleClass('active');
  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }
  });
});
