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

function showSlide(index){
    slides.forEach(slide=>slide.classList.remove("active"));
    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");

    if(dots[index]){
        dots[index].classList.add("active");
    }
}

function nextSlide(){
    current++;
    if(current>=slides.length) current=0;
    showSlide(current);
}

function prevSlide(){
    current--;
    if(current<0) current=slides.length-1;
    showSlide(current);
}

function startSlider(){
    clearInterval(slider);
    slider=setInterval(nextSlide,4000);
}

startSlider();

if(next){
    next.addEventListener("click",()=>{
        nextSlide();
        startSlider();
    });
}

if(prev){
    prev.addEventListener("click",()=>{
        prevSlide();
        startSlider();
    });
}

dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
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

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=
    document.documentElement.scrollHeight-
    document.documentElement.clientHeight;

    const progress=(scrollTop/scrollHeight)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});

// ==========================
// Mobile Hamburger Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

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

    if(preloader){

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 1200);

    }

});

// ==========================
// Scroll To Top Button
// ==========================

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if(scrollTopBtn){

        if(window.scrollY > 400){
            scrollTopBtn.classList.add("show");
        }else{
            scrollTopBtn.classList.remove("show");
        }

    }

});

if(scrollTopBtn){

    scrollTopBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

// ==========================
// Animated Stats Counter
// ==========================

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = Number(counter.dataset.target);

            let count = 0;

            const step = Math.max(1, Math.ceil(target/80));

            function update(){

                count += step;

                if(count < target){

                    counter.innerText = count;

                    requestAnimationFrame(update);

                }else{

                    switch(target){

                        case 1000:
                            counter.innerText="1000+";
                            break;

                        case 500:
                            counter.innerText="500m";
                            break;

                        case 24:
                            counter.innerText="24×7";
                            break;

                        case 5:
                            counter.innerText="★★★★★";
                            break;

                        default:
                            counter.innerText=target;

                    }

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);
