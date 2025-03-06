const num = [3, 7, 10, 15, 23];
const fruits = ["apple", "banana", "grape", "kiwi", "mango", "strawberry"];
//1. num에서 각각 요소들을 제곱해서 콘솔 나타내기
const q1 = num.map((x) => x ** 2);
//2. num에서 각각 요소들을 홀수면 +10, 짝수면 -10 해서 콘솔 나타내기
const q2 = num.map((x) => (x % 2 ? x + 10 : x - 10));

//3. fruits에서 각각 요소들을 문자의 길이가 5이하이면 대문자 아니면 "🍪"로 바꾸기
const q3 = fruits.map((x) => (x.length <= 5 ? x.toUpperCase() : "🍪"));

//4. fruits에서 각각 요소들을 앞의 3글자만 나타내기!
const q4 = fruits.map((x) => x.slice(0, 3));

//5. fruits에서 각각 요소들을 첫글자만 대문자하고 나머지는 소문자로 나타내기
const q5 = fruits.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1, x.length));

// // console.log(q1, q2, q3, q4, q5);

const starbucks = [
  { name: "민트초코라떼", price: 6000, shots: 2 },
  { name: "자몽허니블랙티", price: 6500, shots: 0 },
  { name: "돌체라떼", price: 5500, shots: 2 },
];
//1. starbucks 할인 10% 가격해서 콘솔로 나타내기
const q6 = starbucks.map((x) => ({ ...x, price: x.price * 0.9 }));

// //2. 라떼 파티, 이름에 라떼가 들어가면 샷을 하나더 추가해서 콘솔 나타내기
const q7 = starbucks.map((x) => ({ ...x, shots: x.name.includes("라떼") ? x.shots + 1 : x.shots }));
// //3. 티 종류는 50% 할인하고, 라떼는 우유공급 저하로 가격 10% 올려서 콘솔로 나타내기
// const q3 = starbucks.map((x) => {
//   if (x.name.includes("티")) {
//     x.price = x.price * 0.5;
//   } else if (x.name.includes("라떼")) {
//     x.price = x.price * 1.1;
//   } else {
//     x.price = x.price;
//   }
//   return x;
// });
