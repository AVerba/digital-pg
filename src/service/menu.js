document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = link.getAttribute('href');
    document.querySelectorAll('.menu__item').forEach(item => {
      item.classList.remove('active');
    });
    link.parentElement.classList.add('active');

    const targetElement = document.querySelector(targetSection);
    const yOffset = -104;
    const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  });
});

const menuItems = document.querySelectorAll('.menu__item'),
  sections=document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let currentSection = '';
  for (const section of sections) {
    if (section.offsetTop <= window.scrollY + 140) {
      currentSection = section.getAttribute('id');
    }
  }
  menuItems.forEach(link => {
    link.classList.remove('active');
    if (link.querySelector('a').getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

