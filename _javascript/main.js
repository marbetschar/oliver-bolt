const init = {
  navbarBurgers: () => {
      const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('a.navbar-burger'), 0);
      if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(navbarBurger => {
          navbarBurger.addEventListener('click', e => {
            let eventTarget = e.target;
            if (eventTarget.tagName.toLowerCase() != 'a') {
              eventTarget = e.target.parentElement;
            }
            const navbarTarget = document.getElementById(eventTarget.dataset.target);

            if (navbarTarget) {
              navbarBurger.classList.toggle('is-active');
              navbarTarget.classList.toggle('is-hidden-touch');
              navbarTarget.classList.toggle('is-block');
            }
          });
        });
      }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init.navbarBurgers();
});
