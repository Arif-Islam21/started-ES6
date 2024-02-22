// default => if value is not provided , take as a default

function add(num1 = 99, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

// const sum = add(5, 6, 7);
const sum = add(3);

function fullName(first = " ", last = " ") {
  const full = first + " " + last;
  return full;
}

function friends(numbs = []) {
  console.log(numbs);
}

function person(arr = {}) {
  console.log(arr);
}
