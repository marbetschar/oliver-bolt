'use strict';

var init = {
  navbarBurgers: function navbarBurgers() {
    var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('a.navbar-burger'), 0);
    if (navbarBurgers.length > 0) {
      navbarBurgers.forEach(function (navbarBurger) {
        navbarBurger.addEventListener('click', function (e) {
          var eventTarget = e.target;
          if (eventTarget.tagName.toLowerCase() != 'a') {
            eventTarget = e.target.parentElement;
          }
          var navbarTarget = document.getElementById(eventTarget.dataset.target);

          if (navbarTarget) {
            navbarBurger.classList.toggle('is-active');
            navbarTarget.classList.toggle('is-hidden-touch');
            navbarTarget.classList.toggle('is-block');
          }
        });
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  init.navbarBurgers();
});