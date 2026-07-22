// =========================
// ปุ่มกลับขึ้นด้านบน
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// Fade Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: .2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = ".8s";

    observer.observe(section);

});


// =========================
// Active Menu
// =========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Lightbox
// =========================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("show");

        const img = document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


// =========================
// Typing Effect
// =========================

const title = document.querySelector(".hero h2");

const text = "Portfolio";

let i = 0;

title.innerHTML = "";

function typing(){

    if(i < text.length){

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,120);

    }

}

typing();
