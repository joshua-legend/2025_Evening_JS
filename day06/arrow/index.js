//일반 함수

hello("김땡땡");

function hello(x) {
  return x + " 안녕!";
}

//화살표(람다) 함수
const hello1 = (x) => {
  return x + " 안녕!";
};

//화살표함수
//1. add (x,y)  //더하기
const add = (x, y) => {
  return x + y;
};
//2. oddEven(x) //홀짝구분
const oddEven = (x) => {
  return x % 2 ? "홀수" : "짝수";
};
//3. changeWord(x) // 10글자 이상 대문자, 아니면 소문자
const changeWord = (x) => {
  return x.length < 10 ? x.toLowerCase() : x.toUppperCase();
};

// const let var(function)

const car = {
  speed: 0,
  up: () => {
    this.speed = this.speed + 1;
  },
};
