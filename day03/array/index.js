// 배열(리스트)
// 시작 번호는 무조건 0

// 기본 타입: number, string, boolean, null, undefined
// 참조 타입: array

const age = [21, 33, 32, 18, 32];
const coffee = ["아메리카노", "라떼", "민트", "초코"];
const isMan = [true, true, false, true];
const list = [
  [1, 2, 3],
  [11, 12, 13],
];

// window.console.log(coffee[0]);
// window.console.log(coffee[2]);
// window.console.log(list[0][2]); // 3
// window.console.log(list[1][0]); // 11

const icecream = ["엄마는 외계인", "뉴욕 치즈케이크", "민트초코", "소금우유"];
const [a, b] = icecream; // "엄마는 외계인", "뉴욕 치즈케이크"
// window.console.log(b); // "뉴욕 치즈케이크"

const bread = ["소금빵", "메론빵"];
bread[2] = "소세지빵"; // 세번째 추가됨
bread[3] = "소보로빵"; // 네번째 추가됨
delete bread[1]; //메론빵 삭제  -> // 예약어 const,let,var,delete

const drinks = ["콜라", "사이다", "환타", "탄산수"];
// rest 연산자
const [one, ...two] = drinks; // one => "콜라"
// window.console.log(two);

const color1 = ["빨", "주", "노"];
const color2 = ["초", "파", "남", "보"];

// window.console.log(color1[2], color2[1]);

const [red, ...restColor1] = color1;
const [green, ...restColor2] = color2;
// window.console.log(restColor1, restColor2);


// destructuring 연산자
const newColor = [...restColor1, ...restColor2];
window.console.log(newColor);
