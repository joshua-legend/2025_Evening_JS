const switchBtn = document.querySelector(".switch");
const circle = document.querySelector(".circle");

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("offColor");
  switchBtn.classList.toggle("onColor");
  circle.classList.toggle("offPosition");
  circle.classList.toggle("onPosition");
});

const check = document.querySelector(".check");
check.addEventListener("click", () => {
  check.classList.toggle("checked");
  check.classList.toggle("unchecked");
});
