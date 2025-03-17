const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  input.type = input.type == "password" ? "text" : "password";
  btn.innerText = btn.innerText == "🔑" ? "🔒" : "🔑";
});
