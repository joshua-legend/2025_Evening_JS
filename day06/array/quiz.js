const numArray = [3, 12, 21, 30, 45];
const strArray = ["americano", "latte", "mint", "cocoa", "lemonade"];

//1. numArray 홀수면 '🥚' 짝수면 '🍎'로 바꾸기
const q1 = numArray.map((x) => {
  return x % 2 ? "🥚" : "🍎";
});

//2. numArray 5의 배수면 "5의배수!" 아니면 그대로 냅두기
const q2 = numArray.map((x) => {
  return x % 5 == 0 ? "5의 배수!" : x;
});

//3. numArray 20보다 작으면 0으로 바꾸고 아니면 50으로 바꾸기
const q3 = numArray.map((x) => {
  return x < 20 ? 0 : 50;
});

//4. strArray 문자의 길이가 홀수이면 '💛' 짝수이면 '🥝'로 바꾸기
const q4 = strArray.map((x) => {
  return x.length % 2 ? "💛" : "🥝";
});
//5. strArray 문자에서 'a','e'가 포함되면 대문자화 아니면 그대로 냅두기
const q5 = strArray.map((x) => {
  return x.includes("a") || x.includes("e") ? x.toUpperCase() : x;
});
//6. strArray 문자에서 l로 시작하면 문자의 길이로 바꾸고 아니면 대문자화로 하기
const q6 = strArray.map((x) => {
  return x.startsWith("l") ? x.length : x.toUpperCase();
});
console.log({ q1, q2, q3, q4, q5, q6 });
