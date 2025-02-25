// 유저에게 월[month]을 입력 받고
// 3,4,5를 입력받으면 봄!
// 6,7,8를 입력받으면 여름!
// 9,10,11를 입력받으면 가을!
// 12,1,2를 입력받으면 겨울!
// 그 외는 그런 계절 없어요😥!

const month = +window.prompt("월 입력");
if (3 <= month && month <= 5) {
  window.console.log("봄!");
} else if (6 <= month && month <= 8) {
  window.console.log("여름!");
} else if (9 <= month && month <= 11) {
  window.console.log("가을!");
} else if (month == 12 || month == 1 || month == 2) {
  window.console.log("겨울!");
} else {
  window.console.log("계절아님ㅅㄱ");
}

// 유저에게 나이를 입력 받고

const age = +window.prompt("나이 입력");

if (0 <= age && age <= 7) {
  window.console.log("유딩");
} else if (8 <= age && age <= 13) {
  window.console.log("초딩");
} else if (14 <= age && age <= 19) {
  window.console.log("중고딩");
} else {
  window.console.log("성인");
}

// 유저에게 숫자를 입력 받고
const num = +window.prompt("숫자 입력");
const isPositive = num > 0;
const isNegative = num < 0;
const isOdd = num % 2 == 1;
const isEven = num % 2 == 0;

if (isPositive && isOdd) {
  window.console.log("양의 홀수");
} else if (isPositive && isEven) {
  window.console.log("양의 짝수");
} else if (isNegative && isOdd) {
  window.console.log("음의 홀수");
} else if (isNegative && isEven) {
  window.console.log("음의 짝수");
} else {
  window.console.log("0");
}
