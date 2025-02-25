const side = window.prompt("한변의 길이");
window.console.log(`정사각형 ${side}길이는 둘레:${side * 4} 넓이:${side * side} 입니다.`);

const dollar = window.prompt("달러 입력");
const parsedDollar = parseInt(dollar);
window.console.log(`${dollar}달러는 ${dollar * 1430}원입니다.`);

const year = window.prompt("출생년도 입력");
const parsedYear = parseInt(year);
window.console.log(`${parsedYear}년생은 ${2026 - parsedYear}살입니다`);

// 프롬프트로 첫번째 숫자 입력
// 프롬프트로 두번째 숫자 입력
// 콘솔로 두수의 합 나타내기

const first = +window.prompt("첫번째 숫자 입력");
const second = +window.prompt("두번째 숫자 입력");
console.log(`두 수의 합: ${first + second}`);
