// ==========================
// THE VRINDA HOUSE
// ==========================

// Hero Slider
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {

    setInterval(() => {

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");

    }, 4000);

}


// Premium Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// Active Menu + Perfect Scroll
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        navLinks.forEach(a => a.classList.remove("active"));
        this.classList.add("active");

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        const topBar = document.querySelector(".top-booking");
        const header = document.querySelector("header");

        const offset =
            (topBar ? topBar.offsetHeight : 0) +
            header.offsetHeight +
            20;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });

    });

});
