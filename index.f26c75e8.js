const e=document.querySelector(".header"),t=document.querySelectorAll(".menu__link");window.addEventListener("scroll",(function(){window.scrollY>2?(e.style.backgroundColor="rgba(0 0 0 / 36%)",t.forEach((e=>{e.style.color="white"}))):(e.style.backgroundColor="transparent",t.forEach((e=>{e.style.color="var(--menu-text-color)"})))})),document.querySelectorAll(".menu__link").forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelectorAll(".menu__item").forEach((e=>{e.classList.remove("active")})),e.parentElement.classList.add("active"),document.querySelector(n).scrollIntoView({behavior:"smooth"})}))}));const n=document.querySelector(".hero__gallery"),o=new Swiper(n,{speed:500,spaceBetween:30,navigation:{nextEl:".btn-next",prevEl:".btn-prev"}}),l=document.querySelector(".btn-prev, .btn-next"),r=document.querySelector(".btn-prev"),c=document.querySelector(".btn-next"),s=document.getElementById("activeSlideNumber"),i=document.getElementById("totalSlides"),a=()=>{const e=o.activeIndex+1,t=o.slides.length;r.disabled=1===e,c.disabled=e===t,s.textContent=("0"+e).slice(-2),i.textContent=("0"+t).slice(-2)};a(),o.on("slideChange",a),l.addEventListener("click",(function(e){e.target.classList.contains("btn-next")?o.slideNext():e.target.classList.contains("btn-prev")&&o.slidePrev()}));
//# sourceMappingURL=index.f26c75e8.js.map
