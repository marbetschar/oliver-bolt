"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      plugins: [lgThumbnail],
      licenseKey: '0000-0000-000-0000',
      speed: 500,
      thumbnail: true
    });
  },
  inlineGallery: function inlineGallery(element, items) {
    var inlineGallery = lightGallery(element, {
      container: element,
      dynamic: true,
      hash: false,
      closable: false,
      showMaximizeIcon: true,
      appendSubHtmlTo: '.lg-item',
      slideDelay: 300,
      plugins: [lgThumbnail],
      licenseKey: '0000-0000-000-0000',
      speed: 500,
      dynamicEl: items
    });
    inlineGallery.openGallery();
  }
};
document.addEventListener('DOMContentLoaded', function () {
  init.navbarBurgers();
  var galleryElement = document.getElementById('lightgallery');

  if (galleryElement) {
    init.gallery(galleryElement);
  }

  var inlineGalleryElement = document.getElementById('inline-lightgallery');

  if (inlineGalleryElement) {
    var items = [];

    var _iterator = _createForOfIteratorHelper(inlineGalleryElement.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var anchor = _step.value;
        var img = anchor.children[0];
        var item = {
          src: anchor['href'],
          thumb: img['src'],
          subHtml: img['alt'] ? '<h4>' + img['alt'] + '</h4>' : ''
        };
        items.push(item);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    while (inlineGalleryElement.firstChild) {
      inlineGalleryElement.removeChild(inlineGalleryElement.firstChild);
    }

    init.inlineGallery(inlineGalleryElement, items);
  }
});