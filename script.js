// Typing animation using Typed.js
let typed = new Typed(".typing", {
  strings: ["Web Developer", "Frontend Developer", "Java Programmer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Nav toggler for small screens
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navToggler.addEventListener("click", () => {
  aside.classList.toggle("open");
});
