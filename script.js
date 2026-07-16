// ==========================
// THE VRINDA HOUSE
// Premium Script
// ==========================

// Hero Slider
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;
let slider;

// Show Slide
function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

// Next Slide
function nextSlide(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

}

// Previous Slide
function prevSlide(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);

}

// Auto Slider
function startSlider(){

    slider = setInterval(nextSlide,4000);

}

startSlider();

// Right Arrow
next.addEventListener("click",()=>{

    clearInterval(slider);

    nextSlide();

    startSlider();

});

// Left Arrow
prev.addEventListener("click",()=>{

    clearInterval(slider);

    prevSlide();

    startSlider();

});


// ==========================
// Premium Navbar
// ==========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// ==========================
// Active Menu + Smooth Scroll
// ==========================

const navLinks=document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        navLinks.forEach(a=>a.classList.remove("active"));

        this.classList.add("active");

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        const topBar=document.querySelector(".top-booking");

        const offset=
        (topBar ? topBar.offsetHeight : 0)+
        header.offsetHeight+
        20;

        window.scrollTo({

            top:target.offsetTop-offset,

            behavior:"smooth"

        });

    });

});
