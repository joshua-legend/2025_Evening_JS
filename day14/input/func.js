export const lengthValid = (length) => (length > 10 ? "red" : "black");
export const hasSpecialChar = (value, special) => ([...special].some((x) => value.includes(x)) ? "green" : "black");
