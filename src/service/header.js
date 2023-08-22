const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.menu__link');

function changeHeaderBackground() {
  if (window.scrollY > 2) {
    header.style.backgroundColor = 'rgba(0 0 0 / 36%)';
    menuLinks.forEach(link => {
      link.style.color = 'white';
    });
  } else {
    header.style.backgroundColor = 'transparent';
    menuLinks.forEach(link => {
      link.style.color = 'var(--menu-text-color)';
    });
  }
}

window.addEventListener('scroll', changeHeaderBackground);