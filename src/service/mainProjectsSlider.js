const mainProjectsGallery = document.querySelector('.hero__gallery');
const mainProjectsSw = new Swiper(mainProjectsGallery, {
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});

const btnPrevNext = document.querySelector('.btn-prev, .btn-next');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const activeSlideNumberElement = document.getElementById('activeSlideNumber');
const totalSlidesElement = document.getElementById('totalSlides');

const updateSlideInfo = () => {
  const activeSlideNumber = mainProjectsSw.activeIndex + 1;
  const totalSlides = mainProjectsSw.slides.length;

  btnPrev.disabled = activeSlideNumber === 1;
  btnNext.disabled = activeSlideNumber === totalSlides;

  activeSlideNumberElement.textContent = ('0' + activeSlideNumber).slice(-2);
  totalSlidesElement.textContent = ('0' + totalSlides).slice(-2);
};

updateSlideInfo();
mainProjectsSw.on('slideChange', updateSlideInfo);

btnPrevNext.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-next')) {
    mainProjectsSw.slideNext();
  } else if (event.target.classList.contains('btn-prev')) {
    mainProjectsSw.slidePrev();
  }
});