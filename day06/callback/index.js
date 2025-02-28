// str,bool,num,arr,obj,func,

// f(g(x)):합성함수
// 콜백함수!
const hello = (x) => {
  x();
  console.log("안녕하세요!");
};
const morning = () => {
  console.log("아침은 커피!");
};
const lunch = () => {
  console.log("점심은 제육!");
};
const dinner = () => {
  console.log("저녁은 샐러드!");
};
hello(lunch);
hello(morning);
