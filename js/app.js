document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerIcon = document.querySelector('.burger-icon');
  const navItem = document.querySelector('.nav-item');

  burgerMenu.addEventListener('click', function() {
    navItem.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });

  var header = document.getElementById('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});