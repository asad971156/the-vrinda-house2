// =========================
// HERO SLIDER
// =========================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

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

    if(current>=slides.length){
        current=0;
    }

    showSlide(current);

}

function prevSlide(){

    current--;

    if(current<0){
        current=slides.length-1;
    }

    showSlide(current);

}

if(next){

    next.addEventListener("click",()=>{

        nextSlide();

    });

}

if(prev){

    prev.addEventListener("click",()=>{

        prevSlide();

    });

}

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

    });

});

setInterval(()=>{

    nextSlide();

},5000);


// =========================
// HEADER SCROLL
// =========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// =========================
// ACTIVE NAV
// =========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let currentSection="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            currentSection=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + currentSection){

            link.classList.add("active");

        }

    });

});


// =========================
// MOBILE MENU
// =========================

const menuBtn=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});


// =========================
// SCROLL PROGRESS BAR
// =========================

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const height=document.documentElement.scrollHeight-window.innerHeight;

    const scrolled=(window.scrollY/height)*100;

    if(progress){

        progress.style.width=scrolled+"%";

    }

});
