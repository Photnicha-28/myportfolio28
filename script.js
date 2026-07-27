// ===========================
// Portfolio Script
// ===========================

// เอฟเฟกต์ Fade In
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ===========================
// Highlight เมนู
// ===========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===========================
// Hover รูปเกียรติบัตร
// ===========================

const certificates = document.querySelectorAll(".gallery img");

certificates.forEach((img) => {

    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });

});
