const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links li");
const closeIcon = document.querySelector(".close-icon");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Cerrar el menú al hacer clic en un enlace
navLinksItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Cerrar el menú al hacer clic fuera de él
body.addEventListener("click", (event) => {
  if (!event.target.closest("nav")) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});