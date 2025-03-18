const input = document.querySelector(".input");
const eye = document.querySelector(".eye");
const digit = document.querySelector(".digit");
const special = document.querySelector(".special");
const length = document.querySelector(".length");

eye.addEventListener("click", () => {
  const { type } = input;
  const { innerText } = eye;
  input.type = type == "text" ? "password" : "text";
  eye.innerText = innerText == "👀" ? "🙈" : "👀";
});

const hasNumber = (value) => [..."1234567890"].some((v) => value.includes(v));
const hasSpecial = (value) => [..."!@$%^*_+~"].some((v) => value.includes(v));
const isLengthValid = (value) => 8 <= value.length && value.length <= 20;

const checkPass = (func, value, target) => {
  func(value) ? target.classList.add("pass") : target.classList.remove("pass");
};
const checkPassList = [
  { func: hasNumber, target: digit },
  { func: hasSpecial, target: special },
  { func: isLengthValid, target: length },
];
input.addEventListener("input", () => {
  const { value } = input;
  checkPassList.forEach((v) => checkPass(v.func, value, v.target));
});
