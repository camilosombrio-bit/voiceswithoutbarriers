/*======================================

VOCES SIN BARRERAS

SCRIPT.JS

=======================================*/

//==============================
//
// LOADER
//
//==============================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.classList.add("fade-out");

setTimeout(()=>{

loader.remove();

},500);

},600);

}

});

//==============================
//
// BOTÓN SUBIR
//
//==============================

const scrollTopButton=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollTopButton.style.opacity="1";

}

else{

scrollTopButton.style.opacity="0";

}

});

if(scrollTopButton){

scrollTopButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
/*======================================

ANIMACIONES AL HACER SCROLL

=======================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

".card, .post-card, .resource-card, .feature-card, .video-card, .testimonial, .partner, .stat-card"

).forEach(element => {

    observer.observe(element);

});

/*======================================

CONTADORES

=======================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const speed = target / 100;

        const updateCounter = () => {

            current += speed;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
/*======================================

BOTÓN MODO OSCURO

=======================================*/

.btn-icon{

width:45px;

height:45px;

border:none;

border-radius:50%;

background:var(--primary);

color:white;

cursor:pointer;

display:flex;

justify-content:center;

align-items:center;

font-size:1.1rem;

transition:.35s;

}

.btn-icon:hover{

transform:rotate(180deg);

background:var(--secondary);

}