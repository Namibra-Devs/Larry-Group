//  Navbar Section----------
 // Active menu----------
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
    }

    activeMenu();
    window.addEventListener("scroll",activeMenu),

    // Sticky Navbar--------
    document.addEventListener("DOMContentLoaded", function() {
        const header = document.querySelector('header');
        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 5);
        });
    });
 
 
 // Toggle Icon Navbar------
 let menuIcon = document.querySelector("#menu-icon");
 let navlist = document.querySelector(".navlist");
 
 menuIcon.onclick = () => {
     menuIcon.classList.toggle("bx-x"); // Toggle the icon class
     navlist.classList.toggle("open"); // Toggle the 'open' class on navlist
 }
 
 
 // Close the menu when a nav link is clicked
 navlist.querySelectorAll("a").forEach(link => {
     link.onclick = () => {
         menuIcon.classList.remove("bx-x");
         navlist.classList.remove("open");
     };
 });

// JavaScript for the Hero Section
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto-slide every 10 seconds
setInterval(() => {
    changeSlide(1);
}, 8000);

 