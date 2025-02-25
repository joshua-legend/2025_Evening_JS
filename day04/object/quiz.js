const movie = [
  { name: "액션 영화", price: 10000 },
  { name: "로맨틱 코미디", price: 8000 },
  { name: "공포 영화", price: 9000 },
];

const num = +prompt("원하는 영화 고르기(1~3)") - 1;
const age = +prompt("나이 입력");

if (age < 13) {
  console.log(`영화 제목:${movie[num].name} 가격:${movie[num].price * 0.5}`);
} else if (60 < age) {
  console.log(`영화 제목:${movie[num].name} 가격:${movie[num].price * 0.7}`);
} else {
  console.log(`영화 제목:${movie[num].name} 가격:${movie[num].price * 1}`);
}
