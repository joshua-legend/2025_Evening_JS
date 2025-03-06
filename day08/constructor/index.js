//string, number
// const arr =["a","d","f"].filter((x,i)=> i % 2)
// const a = new Array(100).fill(1).map((x, i) => i + 10);

//1. 0~100 배열 만들고, 5의 배수는 '🍅' 나머지는 숫자
const q1 = Array(101)
  .fill(0)
  .map((x, i) => (i % 5 ? i : "🍅"));

//2. 0~100 배열 만들고, 3의 배수 또는 7의 배수는 문자열로 나머지 숫자
const q2 = Array(101)
  .fill(0)
  .map((x, i) => (i % 3 == 0 || i % 7 == 0 ? String(i) : i));

//3. 0부터 100까지의 총합 구하기
const q3 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .reduce((a, c) => a + c);

//4. 0~100까지 3,6,9 들어가면 👏 아니면 숫자
const q4 = Array(101)
  .fill(0)
  .map((x, i) => (String(i).includes("3") || String(i).includes("6") || String(i).includes("9") ? "👏" : Number(i)));
console.log(q4);

const a1 = {
  name: "아메리카노",
  price: 2500,
};

//builtin
