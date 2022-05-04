/* Menu */
const $burger = document.querySelector(".menu__icon");
const $menu = document.querySelector(".menu__body");
const $header = document.querySelector(".header");
const $logoF = document.querySelector(".logo_f");
const $logoS = document.querySelector(".logo_s");
const $curtain = document.querySelector(".curtain");
const $links = document.querySelectorAll(".menu__link");

$burger.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("static");
  $burger.classList.toggle("show-menu");
  $menu.classList.toggle("show-menu");
  $header.classList.toggle("show-menu");
  $logoF.classList.toggle("show-menu");
  $logoS.classList.toggle("show-menu");
  $curtain.classList.toggle("show-menu");
});

function hideMenu() {
  document.body.classList.remove("static");
  $burger.classList.remove("show-menu");
  $menu.classList.remove("show-menu");
  $header.classList.remove("show-menu");
  $logoF.classList.remove("show-menu");
  $logoS.classList.remove("show-menu");
  $curtain.classList.remove("show-menu");
}

$links.forEach((e) => {
  e.addEventListener("click", hideMenu);
  console.log("Hi");
});

$curtain.addEventListener("click", hideMenu);

/* Carousel */
