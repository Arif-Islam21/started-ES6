const result = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  const max = Math.max(...newArr);
  console.log(newArr);
  console.log(max);
};

result([1, 2, 34, 43], [32, 43, 45, 12]);
