const e=document.querySelector(".header"),t=document.querySelectorAll(".menu__link");window.addEventListener("scroll",(function(){window.scrollY>2?(e.style.backgroundColor="rgba(0 0 0 / 36%)",t.forEach((e=>{e.style.color="white"}))):(e.style.backgroundColor="transparent",t.forEach((e=>{e.style.color="var(--menu-text-color)"})))}));const o=document.querySelectorAll(".animate-projects-list .projects__item"),r=document.querySelector(".animate-hero-swipe"),n=document.querySelector(".animate-hero-describ"),c=document.querySelector(".animate-about-images"),s=document.querySelector(".animate-about-describ"),a=document.querySelector(".animate-contacts-image"),i=document.querySelector(".animate-contacts-form"),l=document.querySelector(".animate-tasks-titl"),g=document.querySelector(".animate-tasks-item-left"),d=document.querySelector(".animate-tasks-item-right");gsap.from(r,{x:"100%",opacity:0,duration:1,scrollTrigger:{trigger:r,start:"top 80%",end:"bottom 50%",toggleActions:"play none none reverse"}}),gsap.from(n,{y:"100%",opacity:0,duration:1,scrollTrigger:{trigger:n,start:"top 90%",end:"bottom 70%",toggleActions:"play none none reverse"}}),o.forEach(((e,t)=>{const o=t%2==0?-1:1;gsap.timeline({scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 50%",toggleActions:"play none none reverse"}}).from(e,{opacity:0,x:50*o,duration:1})})),gsap.from(c,{x:"-100%",stagger:.2,duration:1,scrollTrigger:{trigger:c,start:"top 100%",end:"bottom 50%",toggleActions:"play none none reverse"}}),gsap.from(s,{y:"100%",duration:1,scrollTrigger:{trigger:s,start:"top 100%",end:"bottom 80%",toggleActions:"play none none reverse"}}),gsap.from(a,{x:"100%",duration:1,scrollTrigger:{trigger:a,start:"top 80%",end:"bottom 50%",toggleActions:"play none none reverse"}}),gsap.from(i,{y:"100%",duration:1,scrollTrigger:{trigger:i,start:"top 110%",end:"bottom 70%",toggleActions:"play none none reverse"}}),gsap.from(l,{y:"100%",duration:1,scrollTrigger:{trigger:".animate-tasks-title",start:"top 110%",end:"bottom 70%",toggleActions:"play none none reverse"}}),gsap.from(g,{x:"-100%",opacity:0,duration:1,scrollTrigger:{trigger:".animate-tasks-item-left",start:"top 80%",end:"bottom 50%",toggleActions:"play none none reverse"}}),gsap.from(d,{x:"100%",opacity:0,duration:1,scrollTrigger:{trigger:".animate-tasks-item-right",start:"top 80%",end:"bottom 50%",toggleActions:"play none none reverse"}});const m=document.querySelector(".js-open-menu"),u=document.querySelector(".js-close-menu"),p=document.querySelector(".js-menu-container"),y=()=>{const e="true"===m.getAttribute("aria-expanded")||!1;m.setAttribute("aria-expanded",!e),p.classList.toggle("is-open")};m.addEventListener("click",y),u.addEventListener("click",y),document.querySelectorAll(".menu__link").forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelectorAll(".menu__item").forEach((e=>{e.classList.remove("active")})),e.parentElement.classList.add("active");const r=document.querySelector(o).getBoundingClientRect().top+window.pageYOffset+-104;window.scrollTo({top:r,behavior:"smooth"})}))}));const b=document.querySelectorAll(".menu__item"),v=document.querySelectorAll("section[id]");window.addEventListener("scroll",(()=>{let e="";for(const t of v)t.offsetTop<=window.scrollY+140&&(e=t.getAttribute("id"));b.forEach((t=>{t.classList.remove("active"),t.querySelector("a").getAttribute("href")===`#${e}`&&t.classList.add("active")}))}));const f=document.querySelector(".hero__gallery"),S=new Swiper(f,{speed:500,spaceBetween:30,navigation:{nextEl:".btn-next",prevEl:".btn-prev"}}),q=document.querySelector(".btn-prev, .btn-next"),A=document.querySelector(".btn-prev"),h=document.querySelector(".btn-next"),x=document.getElementById("activeSlideNumber"),w=document.getElementById("totalSlides"),E=()=>{const e=S.activeIndex+1,t=S.slides.length;A.disabled=1===e,h.disabled=e===t,x.textContent=("0"+e).slice(-2),w.textContent=("0"+t).slice(-2)};E(),S.on("slideChange",E),q.addEventListener("click",(function(e){e.target.classList.contains("btn-next")?S.slideNext():e.target.classList.contains("btn-prev")&&S.slidePrev()}));
//# sourceMappingURL=index.a6700304.js.map
