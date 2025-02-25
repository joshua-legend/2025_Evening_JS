// function => 마술상자
// [input -> output]
function add(x, y) {
  return x + y;
}

const a = add(1, 3); // 4
function minus(x, y) {
  return x - y;
}
const b = minus(10, 3); // 7
const c = minus(add(10, 10), add(3, 3)); // 14

function isAdult(x) {
  if (x > 19) {
    return "성인";
  } else {
    return "미성년자";
  }
}
