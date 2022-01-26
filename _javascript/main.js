const init = {
  navbarBurgers: () => {
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

  gallery: (element) => {
    lightGallery(element, {
        plugins: [
          lgThumbnail
        ],
        licenseKey: '0000-0000-000-0000',
        speed: 500,
        thumbnail: true
    });
  },
  inlineGallery: function(element, items) {
    const inlineGallery = lightGallery(element, {
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

document.addEventListener('DOMContentLoaded', () => {
  init.navbarBurgers();

  const galleryElement = document.getElementById('lightgallery');
  if (galleryElement) {
    init.gallery(galleryElement);
  }

  const inlineGalleryElement = document.getElementById('inline-lightgallery');
  if (inlineGalleryElement) {
    const items = [];

    for(let anchor of inlineGalleryElement.children) {
      const img = anchor.children[0];
      const item = {
        src: anchor['href'],
        thumb: img['src'],
        subHtml: img['alt'] ? '<h4>' + img['alt'] + '</h4>' : ''
      };

      items.push(item);
    }

    while(inlineGalleryElement.firstChild) {
      inlineGalleryElement.removeChild(inlineGalleryElement.firstChild);
    }
    

    init.inlineGallery(inlineGalleryElement, items);
  }
});