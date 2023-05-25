$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: false,
  });
});

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};
