// ==============================
// THE VRINDA HOUSE
// Premium Hero Slider
// ==============================

// Elements
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;
let slider;


// ==============================
// Show Slide
// ==============================

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if(dots[index]){
        dots[index].classList.add("active");
    }

}


// ==============================
// Next Slide
// ==============================

function nextSlide(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

}


// ==============================
// Previous Slide
// ==============================

function prevSlide(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);

}


// ==============================
// Auto Slider
// ==============================

function startSlider(){

    slider = setInterval(nextSlide,4000);

}

startSlider();


// ==============================
// Right Arrow
// ==============================

if(next){

next.addEventListener("click",()=>{

    clearInterval(slider);

    nextSlide();

    startSlider();

});

}


// ==============================
// Left Arrow
// ==============================

if(prev){

prev.addEventListener("click",()=>{

    clearInterval(slider);

    prevSlide();

    startSlider();

});

}


// ==============================
// Slider Dots
// ==============================

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        clearInterval(slider);

        current=index;

        showSlide(current);

        startSlider();

    });

});


// ==============================
// Premium Navbar
// ==============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// ==============================
// Active Menu + Smooth Scroll
// ==============================

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

// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});


// ==========================
// Mobile Hamburger Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});
