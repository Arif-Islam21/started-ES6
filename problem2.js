let sum = 0;

const squareSum = (arr) => {
  for (const item of arr) {
    const square = item * item;
    sum = sum + square;

    // console.log(item);
  }
  const average = sum / arr.length;
  return average;
};

const answer = squareSum([3, 4, 2, 2, 1, 5]);
console.log(answer.toFixed(2));
