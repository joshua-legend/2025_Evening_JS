// 산술 연산자(Operator)
const a1 = 1 + 2;
const a2 = 1 - 2;
const a3 = 1 * 3;
const a4 = 2 ** 3; // 제곱 연산자 => 8
const a5 = 3 / 2; // 나누기 연산자 => 1.5
const a6 = 3 % 2; // 나머지 연산자 => 1

// 대입 연산자 (=)
const b = 10;

// 비교 연산자 (<,>,<=,>=, ==, != )
// 불리언 암묵적 타입변환
const c = 5 < 3; // false
const c1 = 5 > 3; // true
const c2 = 5 <= 3; // false
const c3 = 5 >= 3; // true

const c4 = 10 == 9; // false
const c5 = 10 != 9; // true
const c6 = 10 === "10"; // 타입까지 체크

// 논리 연산자(and &&, or ||, not !)
// and: 하나라도 false면 false <-> 모두 true이면 true
// or: 하나라도 true면 true <-> 모두 false이면 false

const d1 = true && false; // false
const d2 = 5 > 10 || 5 > 9 || 5 > 0; // true
const d3 = !(5 > 3); // false
const d4 = 5 <= 3;
const d5 = 5 > 3 && 7 > 3;
const d6 = !(5 <= 3) || !(7 <= 3); // 드모르간법칙 n년차 공부

// 삼항 연산자 (?)
// 조건 ? 참 : 거짓
const e = 5 < 3 ? "떡볶이" : "마라탕"; //마라탕
const e1 = 10 === "10" ? "치즈" : "소스"; // 소스
