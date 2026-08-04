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