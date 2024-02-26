// const instructor = [
//   { name: "Nodi", age: 28, position: "senior" },
//   { name: "Akil", age: 26, position: "junior" },
//   { name: "Shobuj", age: 30, position: "senior" },
// ];

// let seniorName = [];

// for (let num in instructor) {
//   const instructorValue = instructor[num];
//   const positionValue = instructorValue.position;
//   if (positionValue === "senior") {
//     seniorName.push(instructorValue.name);
//   }
// }
// console.log(seniorName);

const people = [
  { name: "Meena", age: 32 },
  { name: "Reena", age: 42 },
  { name: "Shokina", age: 23 },
];

const nums = [20, 15, 22];
const sum = nums.reduce(
  (total = (prev, current) => {
    const sums = prev + current;
    return sums;
  }),
  0
);

console.log(sum);
