const numbers = [1, 34, 5, 6, 56, 34];

// for (let i = 0; i< numbers.length; i++){}
// while
// WE WILL USE LESS OF TWO THEM
for (const num of numbers) {
  // we will use them more
  //   console.log(num);
}

const nobab = "siraj ud doula";
for (const char of nobab) {
  //   console.log(char);
}

const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

for (const keys in glass) {
  const value = glass[keys];
  //   console.log(keys, value);
}
// for (const keys of glass) {
//   console.log(keys);
// }

const keys = Object.keys(glass);
console.log(keys);

for (const key of keys) {
  const value = glass[key];
  console.log(key, value);
}
