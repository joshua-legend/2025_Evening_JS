const solution = (myString) => [...myString].map((x) => (x == "a" ? x.toUpperCase() : x.toLowerCase())).join("");
const solution1 = (todo_list, finished) => todo_list.filter((x, i) => !finished[i]);
const solution2 = (names) => names.filter((x, i) => i % 5 == 0);
const solution3 = (start_num, end_num) =>
  Array(start_num - end_num + 1)
    .fill(0)
    .map((x, i) => start_num - i);
