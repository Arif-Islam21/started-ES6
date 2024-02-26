const numbers = [1, 3, 5, 7, 9];
// for (let num of numbers) {
//   if (num % 2 === 1) {
//     num += 1;
//   }
//   console.log(num);
// }

// numbers.map(() => {
//   if (num % 2 === 1) {
//     num = num + 1;
//   }
//   console.log(num);
// });

const even = numbers.map(
  (num = (n) => {
    if (n % 2 === 1) {
      n += 1;
    }
    return n;
  })
);

console.log(even);
