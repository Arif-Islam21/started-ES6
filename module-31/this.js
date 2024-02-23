// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sleep() {
//     console.log(`this is ${this.name} sleeping now`);
//   }
//   activity() {
//     this.sleep();
//   }
// }

// const kodom = new Person("Kodom  ali", 21);
// console.log(kodom);
// kodom.sleep();
// kodom.activity();

// function min(nums) {
//   return Math.min(nums);
// }
// console.log(min([1, 3, 2]));

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);
