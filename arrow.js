// FUNCTION DECLARATION

// function add(a, b) {
//   const result = a + b;
//   return result;
// }

function add(a, b) {
  return a + b;
}

// FUNCTION EXPRESSION

const add2 = function (a, b) {
  return a + b;
};

// ARROW FUNCTION

const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

const sum2 = add4(1, 2, 3, 4);
console.log(sum2);

const sum = add3(5, 90);
console.log(sum);
