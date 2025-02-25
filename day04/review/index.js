// const beverage = +window.prompt("음료 종류 고르기(1~3)");
// const money = +window.prompt("금액 투입");

// if (beverage == 1 && money >= 3000) {
//   window.console.log("아메리카노");
//   window.console.log(`잔돈: ${moeny - 3000}`);
// } else if (beverage == 2 && money >= 4000) {
//   window.console.log("레몬에이드");
//   window.console.log(`잔돈: ${moeny - 4000}`);
// } else if (beverage == 3 && money >= 3500) {
//   window.console.log("라떼");
//   window.console.log(`잔돈: ${moeny - 3500}`);
// } else {
//   window.console.log("없는 음료 종류이거나 금액이 적습니다.");
// }

// const beverage = +window.prompt("음료 종류 고르기(0~2)");
// const money = +window.prompt("금액 투입");

// const menu = ["아메리카노", "레몬에이드", "라떼"];
// const cost = [3000, 4000, 3500];

// if (beverage < 0 || 2 < beverage) {
//   window.console.log("없는 메뉴입니다.");
// } else {
//   if (cost[beverage] > money) {
//     window.console.log("금액이 모자랍니다.");
//   } else {
//     window.console.log(`음료:${menu[beverage]} 잔돈:${money - cost[beverage]}`);
//   }
// }

const bus = +window.prompt("버스 노선 종류 선택(1~3)") - 1;
const age = +window.prompt("승객의 나이 입력");

const busObject = [
  { name: "시내버스", cost: 1200 },
  { name: "광역버스", cost: 2000 },
  { name: "마을버스", cost: 1000 },
];

if (age <= 7 || 65 <= age) {
  console.log("무료");
} else if (8 <= age && age <= 19) {
  console.log(`버스종류:${busObject[bus].name} 버스금액:${busObject[bus].cost * 0.7}`);
} else {
  console.log(`버스종류:${busObject[bus].name} 버스금액:${busObject[bus].cost}`);
}
