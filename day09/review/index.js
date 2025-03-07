const solution = (my_string) => [...my_string].map((x) => (x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())).join("");
const solution1 = (num_list) => (num_list.length >= 11 ? num_list.reduce((a, c) => a + c) : num_list.reduce((a, c) => a * c));
