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

//
//
// let isMenuVisible = true;
// let isCursorOverHeader = false;
// const header = document.querySelector('.header');
// const sections = document.querySelectorAll('.section');
//
// document.querySelectorAll('.menu__link').forEach(link => {
//   link.addEventListener('click', function(event) {
//     event.preventDefault();
//     const targetSection = link.getAttribute('href');
//
//     document.querySelectorAll('.menu__item').forEach(item => {
//       item.classList.remove('active');
//     });
//
//     link.parentElement.classList.add('active');
//
//     const targetElement = document.querySelector(targetSection);
//     const yOffset = -104;
//     const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
//
//     window.scrollTo({
//       top: yPosition,
//       behavior: 'smooth'
//     });
//   });
// });
//
// header.addEventListener('mouseenter', () => {
//   isCursorOverHeader = true;
//   toggleMenuVisibility();
// });
//
// header.addEventListener('mouseleave', () => {
//   isCursorOverHeader = false;
//   toggleMenuVisibility();
// });
//
// window.addEventListener('scroll', () => {
//   toggleMenuVisibility();
// });
//
// function toggleMenuVisibility() {
//   const currentScrollPos = window.pageYOffset;
//
//   if (currentScrollPos === 0) {
//     isMenuVisible = true;
//   } else if (!isCursorOverHeader && !isScrolledToSection(currentScrollPos)) {
//     isMenuVisible = false;
//   }
//
//   if (isMenuVisible) {
//     header.classList.remove('hidden');
//   } else {
//     header.classList.add('hidden');
//   }
// }
//
// function isScrolledToSection(scrollPos) {
//   return Array.from(sections).some(section => {
//     const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
//     return sectionTop <= scrollPos;
//   });
// }
