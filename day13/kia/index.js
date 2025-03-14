const dent = document.querySelector(".dent");
const sheeting = document.querySelector(".sheeting");
const change = document.querySelector(".change");

dent.addEventListener("click", () => {
  sheeting.classList.remove("check");
  change.classList.remove("check");
  dent.classList.toggle("check");
});
sheeting.addEventListener("click", () => {
  dent.classList.remove("check");
  change.classList.remove("check");
  sheeting.classList.toggle("check");
});
change.addEventListener("click", () => {
  dent.classList.remove("check");
  sheeting.classList.remove("check");
  change.classList.toggle("check");
});
