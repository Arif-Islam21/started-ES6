const numbers = [12, 23, 43, 1, 2, 4, 5, 6, 7];

const selected = numbers.filter((p) => p > 10);
// console.log(selected);
const selectedEven = numbers.filter((p) => p % 2 === 0);
console.log(selectedEven);
