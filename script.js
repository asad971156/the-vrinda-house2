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

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ==========================
// Luxury Preloader
// ==========================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 1500);

});

// ==========================
// Scroll To Top Button
// ==========================

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", (e) => {

    e.preventDefault();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// Animated Stats Counter
// ==========================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let count = 0;
        const speed = target / 80;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                // Final text formatting
                if (target === 1000) {
                    counter.innerText = "1000+";
                } else if (target === 500) {
                    counter.innerText = "500m";
                } else if (target === 24) {
                    counter.innerText = "24×7";
                } else if (target === 5) {
                    counter.innerText = "★★★★★";
                } else {
                    counter.innerText = target;
                }

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));
