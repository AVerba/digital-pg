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