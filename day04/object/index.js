// 기본타입: string, number,boolean,null,undefind
// 참조타입: array[], object

// key - value
// 문자,정수 - 아무타입가능
const coffee = {
  name: "아메리카노",
  price: 2500,
  shots: true,
  hasCaffein: true,
  ingredients: ["물", "커피콩"],
};

coffee["price"]; // 2500
coffee.price; // 2500

console.log(`샷갯수:${coffee.shots} 성분:${coffee.ingredients[1]}`);

const car = {
  company: "기아",
  name: "레이EV",
  options: ["투톤 패키지", "컴포트"],
  year: 2025,
  fuel: 19.2,
};

// car.company
// car["company"]
// car.coffee // undefined

car.people = 4; // people:4 추가
delete car.options;
car.fuel = 20; // fuel:20
