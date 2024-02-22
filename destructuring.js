const actor = {
  name: "ananta",
  age: 30,
  phone: "018238283",
  money: 12344566,
};

// UNDERSTAING DESTRUCTURING
// if right sight is an object then left side also will be an object
const { phone, age: boyosh, name } = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
console.log(phone);
console.log(boyosh);
console.log(name);

const numbers = [45, 87, 45];
const [first, secoend] = numbers;
const [x, y] = [12, 66];

console.log(first);
console.log(secoend);

function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [prothom, ditiyo] = doubleThem(4, 6);
console.log(prothom);
console.log(ditiyo);
