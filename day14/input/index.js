import { hasSpecialChar, lengthValid } from "./func.js";

const input = document.querySelector(".input");
const textNum = document.querySelector(".textNum");
const condition = document.querySelector(".condition");

input.addEventListener("input", () => {
  const { length } = input.value;
  textNum.innerText = length;
  textNum.style.color = lengthValid(length);
  condition.style.color = hasSpecialChar(input.value, "!@#^&*~");
});
