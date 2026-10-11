
const words = ["student", "learner", "problem solver", "future engineer"];

const typedElement = document.getElementById("typed");

let wordIndex = 0;      
let letterIndex = 0;    
let isDeleting = false; 

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  typedElement.textContent = currentWord.substring(0, letterIndex);

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && letterIndex === currentWord.length) {
    delay = 1400;
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let currentId = "home";

  sections.forEach(function (section) {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

document.getElementById("year").textContent = new Date().getFullYear();