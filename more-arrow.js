const person = {
  name: "arif",
  age: 18,
};
const getAge = (person) => person.age;

const age = getAge(person);
console.log(age);

// no parameter
const getPi = () => Math.PI;
const pi = getPi();
console.log(pi);

// large arrow function
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result; // YOU HAVE TO RETURN WHEN YOU HAVE A LARGE ARROW FUNCTION
};
