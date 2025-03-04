document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
  });
});

let lastScrollTop = 0; // Track the last scroll position
const nav = document.querySelector(".header");
const navLinks = document.querySelector(".nav-links"); // Get the nav element

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

  // If we're scrolling down, hide the navbar
  if (currentScroll > lastScrollTop) {
    nav.style.top = "-160px"; // Hide the navbar (adjust 60px based on the navbar height)
    navLinks.style.left = "-1280px";
  } else {
    nav.style.top = "0"; // Show the navbar when scrolling up
    navLinks.style.left = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update the last scroll position
});

const links = document.querySelectorAll("a");
const menu = document.querySelector(".nav-links");

// Add event listener for each <a> tag
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Check if .show-menu exists and is currently visible
    if (menu && menu.classList.toggle("show-menu")) {
      menu.classList.remove("show-menu"); // Remove the class that shows the menu
    }
  });
});
