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
});

$curtain.addEventListener("click", hideMenu);

/* SWIPER */
const swiper = new Swiper(".slider", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  },
});
