// // 데이터 타입 종류

// // 문자 타입: "", ``, ''
// // 숫자 타입: 아라비아 숫자

// const name = `전수효`;
// const age = 30;
// const birth = 2000;
// const coffee = "아메리카노";

// // 더하기에 문자 타입이 들어가면 모두 문자 취급함

// window.console.log(age + birth); // 2030
// window.console.log(coffee + age); // 아메리카노30
// window.console.log(age + coffee + birth);

// const age1 = "17";
// const age2 = "19";
// window.console.log(age1 + age2);

// prompt는 문자취급
const age = window.prompt("숫자 입력");
const number_age = Number(age);
window.console.log(`${number_age}의 10을 더한 값은: ${number_age + 10}`);
