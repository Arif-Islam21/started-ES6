const numbers = [1, 3, 5, 7, 9];
for (let num of numbers) {
  if (num % 2 === 1) {
    num += 1;
  }
  console.log(num);
}
