const amBtn = document.querySelector(".americano");
const latteBtn = document.querySelector(".latte");
const mintBtn = document.querySelector(".mint");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
const buy = document.querySelector(".buy");

amBtn.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":"); // 총 금액:
  total.innerText = `총 금액:${parseInt(money) + 2000}원`;
});
latteBtn.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":"); // 총 금액:
  total.innerText = `총 금액:${parseInt(money) + 3000}원`;
});
mintBtn.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":"); // 총 금액:
  total.innerText = `총 금액:${parseInt(money) + 3500}원`;
});
reset.addEventListener("click", () => {
  total.innerText = `총 금액:0원`;
});
buy.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":"); // 총 금액:
  alert(`구매하신 총 금액은 ${money} 입니다.`);
});
