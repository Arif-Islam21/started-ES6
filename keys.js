const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

console.log(glass);
const keys = Object.keys(glass);
const values = Object.values(glass);
// console.log(keys);
// console.log(values);

const pair = Object.entries(glass);
// console.log(pair);

// delete glass.isCleaned;
// console.log(glass);

const { isCleaned, ...rest } = glass;
// console.log(rest);

// freezr
// Object.freeze(glass);
glass.source = "Bangladesh";

// SEAL YOU CAN MODIFY BUT CANT ADD OR REMOVE
Object.seal(glass);
glass.price = 5000;
glass.origin = "Bangladesh";
console.log(glass);
