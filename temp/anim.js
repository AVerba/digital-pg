//========Animation of the hero section==========
gsap.from('.animate-hero-swipe', {
  x: '100%', // Начальное положение элемента за пределами экрана справа
  opacity: 0, // Начальная непрозрачность элемента
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-hero-swipe',
    start: 'top 80%', // Начать анимацию, когда верх элемента будет находиться на 80% от верха окна
    end: 'bottom 50%', // Завершить анимацию, когда нижняя часть элемента будет находиться на 50% от верха окна
    toggleActions: 'play none none reverse', // Воспроизвести анимацию при скролле вниз, отменить при скролле вверх
  },
});

// Анимация для hero__describ
gsap.from('.animate-hero-describ', {
  y: '100%', // Начальное положение элемента за пределами экрана снизу
  opacity: 0, // Начальная непрозрачность элемента
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-hero-describ',
    start: 'top 90%', // Начать анимацию, когда верх элемента будет находиться на 90% от верха окна
    end: 'bottom 70%', // Завершить анимацию, когда нижняя часть элемента будет находиться на 70% от верха окна
    toggleActions: 'play none none reverse', // Воспроизвести анимацию при скролле вниз, отменить при скролле вверх
  },
});
//========Animation of the projects section==========
// Получаем все элементы li списка проектов
const projectItems = document.querySelectorAll('.animate-projects-list .projects__item');

// Создаем анимацию для каждого элемента
projectItems.forEach((item, index) => {
  const anim = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 80%', // Начать анимацию, когда верх элемента будет находиться на 80% от верха окна
      end: 'bottom 50%', // Завершить анимацию, когда нижняя часть элемента будет находиться на 50% от верха окна
      toggleActions: 'play none none reverse', // Воспроизвести анимацию при скролле вниз, отменить при скролле вверх
    },
  });

  // Определяем направление анимации в зависимости от индекса элемента
  const direction = index % 2 === 0 ? -1 : 1;

  // Применяем анимацию
  anim.from(item, {
    opacity: 0,
    x: 50 * direction,
    duration: 1.0,
  });
});
//========Animation of the about section==========
gsap.from('.animate-about-images', {
  x: '-100%', // Начальное положение элемента за пределами экрана слева
  stagger: 0.2, // Задержка между появлением каждого элемента
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-about-images',
    start: 'top 80%', // Начать анимацию, когда верх элемента будет находиться на 80% от верха окна
    end: 'bottom 50%', // Завершить анимацию, когда нижняя часть элемента будет находиться на 50% от верха окна
    toggleActions: 'play none none reverse', // Воспроизвести анимацию при скролле вниз, отменить при скролле вверх
  },
});

// Анимация для about__describ
gsap.from('.animate-about-describ', {
  y: '100%', // Начальное положение элемента за пределами экрана снизу
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-about-describ',
    start: 'top 100%', // Начать анимацию, когда верх элемента будет находиться на 90% от верха окна
    end: 'bottom 80%', // Завершить анимацию, когда нижняя часть элемента будет находиться на 70% от верха окна
    toggleActions: 'play none none reverse', // Воспроизвести анимацию при скролле вниз, отменить при скролле вверх
  },
});

// ==========Animation of the contacts section ================
gsap.from('.animate-contacts-image', {
  x: '100%', // Начальное положение элемента за пределами экрана справа
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-contacts-image',
    start: 'top 80%', // Начать анимацию, когда верх элемента будет находиться на 80% от верха окна
    end: 'bottom 50%', // Завершить анимацию, когда нижняя часть элемента будет находиться на 50% от верха окна
    toggleActions: 'play none none reverse', // Воспроизвести анимацию при скролле вниз, отменить при скролле вверх
  },
});

// Анимация для hero__describ
gsap.from('.animate-contacts-form', {
  y: '100%', // Начальное положение элемента за пределами экрана снизу
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-contacts-form',
    start: 'top 90%', // Начать анимацию, когда верх элемента будет находиться на 90% от верха окна
    end: 'bottom 70%', // Завершить анимацию, когда нижняя часть элемента будет находиться на 70% от верха окна
    toggleActions: 'play none none reverse', // Воспроизвести анимацию при скролле вниз, отменить при скролле вверх
  },
});