const projectItems = document.querySelectorAll('.animate-projects-list .projects__item'),
  animateHeroSwipe = document.querySelector('.animate-hero-swipe'),
  animateHeroDescrib = document.querySelector('.animate-hero-describ'),
  animateAboutImages = document.querySelector('.animate-about-images'),
  animateAboutDescrib = document.querySelector('.animate-about-describ'),
  animatContactsImage = document.querySelector('.animate-contacts-image'),
  animateContactsForm = document.querySelector('.animate-contacts-form'),
  animateTasksTitle = document.querySelector('.animate-tasks-titl'),
  animateTasksItemLeft = document.querySelector('.animate-tasks-item-left'),
  animateTasksItemRight = document.querySelector('.animate-tasks-item-right');

//========Animation of the hero section==========
gsap.from(animateHeroSwipe, {
  x: '100%',
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: animateHeroSwipe,
    start: 'top 80%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from(animateHeroDescrib, {
  y: '100%',
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: animateHeroDescrib,
    start: 'top 90%',
    end: 'bottom 70%',
    toggleActions: 'play none none reverse',
  },
});
//========Animation of the projects section==========


projectItems.forEach((item, index) => {
  const anim = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      end: 'bottom 50%',
      toggleActions: 'play none none reverse',
    },
  });

  const direction = index % 2 === 0 ? -1 : 1;
  anim.from(item, {
    opacity: 0,
    x: 50 * direction,
    duration: 1.0,
  });
});
//========Animation of the about section==========
gsap.from(animateAboutImages, {
  x: '-100%',
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: animateAboutImages,
    start: 'top 100%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from(animateAboutDescrib, {
  y: '100%',
  duration: 1,
  scrollTrigger: {
    trigger: animateAboutDescrib,
    start: 'top 100%',
    end: 'bottom 80%',
    toggleActions: 'play none none reverse',
  },
});

// ==========Animation of the contacts section ================
gsap.from(animatContactsImage, {
  x: '100%',
  duration: 1,
  scrollTrigger: {
    trigger: animatContactsImage,
    start: 'top 80%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from(animateContactsForm, {
  y: '100%',
  duration: 1,
  scrollTrigger: {
    trigger: animateContactsForm,
    start: 'top 100%',
    end: 'bottom 70%',
    toggleActions: 'play none none reverse',
  },
});

// ==========Animation tasks

gsap.from(animateTasksTitle, {
  y: '100%',
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-tasks-title',
    start: 'top 110%',
    end: 'bottom 70%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from(animateTasksItemLeft, {
  x: '-100%',
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-tasks-item-left',
    start: 'top 80%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from(animateTasksItemRight, {
  x: '100%',
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-tasks-item-right',
    start: 'top 80%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});
