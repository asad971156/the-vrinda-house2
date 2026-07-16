// ===============================
// THE VRINDA HOUSE
// Hero Slider + Premium Navbar
// ===============================

// Hero Slider
const slides = document.querySelectorAll(".slide");

let current = 0;

if (slides.length > 0) {

    setInterval(() => {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");

    }, 4000);

}


// Premium Navbar Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// Active Menu Highlight

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});
