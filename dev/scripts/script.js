// Hamburger

const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", function() {
  navMobile.classList.toggle("show");
});
