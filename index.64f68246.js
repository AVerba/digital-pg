!function(){var e=document.querySelector(".header"),t=document.querySelectorAll(".menu__link");window.addEventListener("scroll",(function(){window.scrollY>2?(e.style.backgroundColor="rgba(0 0 0 / 36%)",t.forEach((function(e){e.style.color="white"}))):(e.style.backgroundColor="transparent",t.forEach((function(e){e.style.color="var(--menu-text-color)"})))}));var n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=document.querySelector(".js-menu-container"),c=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),r.classList.toggle("is-open")};n.addEventListener("click",c),o.addEventListener("click",c),document.querySelectorAll(".menu__link").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelectorAll(".menu__item").forEach((function(e){e.classList.remove("active")})),e.parentElement.classList.add("active");var o=document.querySelector(n).getBoundingClientRect().top+window.pageYOffset+-104;window.scrollTo({top:o,behavior:"smooth"})}))}));var l=document.querySelector(".hero__gallery"),i=new Swiper(l,{speed:500,spaceBetween:30,navigation:{nextEl:".btn-next",prevEl:".btn-prev"}}),a=document.querySelector(".btn-prev, .btn-next"),d=document.querySelector(".btn-prev"),u=document.querySelector(".btn-next"),s=document.getElementById("activeSlideNumber"),m=document.getElementById("totalSlides"),v=function(){var e=i.activeIndex+1,t=i.slides.length;d.disabled=1===e,u.disabled=e===t,s.textContent=("0"+e).slice(-2),m.textContent=("0"+t).slice(-2)};v(),i.on("slideChange",v),a.addEventListener("click",(function(e){e.target.classList.contains("btn-next")?i.slideNext():e.target.classList.contains("btn-prev")&&i.slidePrev()}))}();
//# sourceMappingURL=index.64f68246.js.map