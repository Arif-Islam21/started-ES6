const numbers = [3, 4, 5, 6, 7];

// function doubleIt(num) {
//   console.log("number now is " + num);
//   return num * 2;
// }

// const result = numbers.map(doubleIt);
// console.log(result);

const output = numbers.map((double2 = (n) => n * 2));
console.log(output);

// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }

// console.log(doubled);
