//1.유저에게 문장을 입력 받고 띄어쓰기 기준으로 배열로 콘솔화하기
const q1 = prompt("문장 입력").split(" ");
console.log(q1);

//2.유저에게 커피를 입력 받고, hot이 있으면 뜨거운 커피, ice가 있으면 차가운 커피
//그 외는 미지근한 커피라고 콘솔만들기
const coffee = prompt("커피 입력");
if (coffee.includes("hot")) {
  console.log("뜨거운 커피");
} else if (coffee.includes("ice")) {
  console.log("차가운 커피");
} else {
  console.log("미지근한 커피");
}

//3.유저에게 단어를 입력받고, 소문자면 대문자화, 대문자면 소문자화하기
const word = prompt("단어 입력");
const q3 = word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
console.log(q3);
