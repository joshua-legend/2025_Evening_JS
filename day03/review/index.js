const first = +window.prompt("첫 번째 숫자 입력");
const second = +window.prompt("두 번째 숫자 입력");
window.console.log(`
    합:${first + second} 
    차:${first - second}
    곱:${first * second}
    제곱:${first ** second}
    나누기 후 내림: ${parseInt(first / second)}
`);

const num = +window.prompt("숫자 입력");
const answer2 = num % 2 ? "홀수" : "짝수";
window.console.log(`${num}은 ${answer2}`);

const time = +window.prompt("숫자 입력");
const minute = parseInt(time / 60);
const seconds = time % 60;
window.console.log(`${minute}분 ${seconds}초`);
