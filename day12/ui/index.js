const target = document.querySelector(".target");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const aside = document.querySelector("aside");

target.addEventListener("click", () => {
  first.classList.toggle("rotate");
  second.classList.toggle("reversedRotate");
});
