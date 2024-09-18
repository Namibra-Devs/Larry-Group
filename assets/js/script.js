//  Navbar Section----------
 // Active menu----------
// let menuLi = document.querySelectorAll('header ul li a');
// let section = document.querySelectorAll('section');


// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY + 97 < section[len].offsetTop){}
//     menuLi.forEach(sec => sec.classList.remove("active"));
//     menuLi[len].classList.add("active");
//     }

//     activeMenu();
//     window.addEventListener("scroll",activeMenu),

    // Sticky Navbar--------
    document.addEventListener("DOMContentLoaded", function() {
        const header = document.querySelector('header');
        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 50);
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

//  Hero Section Animation----------
