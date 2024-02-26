const instructor = [
  { name: "Nodi", age: 28, position: "senior" },
  { name: "Akil", age: 26, position: "junior" },
  { name: "Shobuj", age: 30, position: "senior" },
];

let seniorName = [];

for (let num in instructor) {
  const instructorValue = instructor[num];
  const positionValue = instructorValue.position;
  if (positionValue === "senior") {
    seniorName.push(instructorValue.name);
    // console.log("senior", positionValue);
  }
  //   console.log(positionValue);
}
// const positionValue = instructor[0];
// console.log(positionValue);
console.log(seniorName);
