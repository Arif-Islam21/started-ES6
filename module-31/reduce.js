const numbers = [12, 3, 4, 2, 3, 4, 2, 3];

const total = numbers.reduce((prev, current) => prev + current, 0);

console.log(total);

const sum = numbers.reduce((p, c) => p - c, 0);
console.log(sum);
