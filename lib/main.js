"use strict";

//import lightGallery from 'lightgallery';
// Plugins
//import lgThumbnail from 'lightgallery/plugins/thumbnail';
//import lgZoom from 'lightgallery/plugins/zoom';
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
  },
  gallery: function gallery(element) {
    lightGallery(element, {
      plugins: [lgZoom, lgThumbnail],
      licenseKey: '0000-0000-000-0000',
      speed: 500
    });
  }
};
document.addEventListener('DOMContentLoaded', function () {
  init.navbarBurgers();
  var galleryElement = document.getElementById('lightgallery');

  if (galleryElement) {
    init.gallery(galleryElement);
  }
});