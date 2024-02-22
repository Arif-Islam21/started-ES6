const max = Math.max(16, 23, 1, 56, 34, 76, 43);
const numbers = [3, 4, 54, 23, 76, 56, 34, 98];
const arrayMax = Math.max(...numbers);
console.log(max);
console.log(arrayMax);
// console.log(...numbers);

// use spread operator to copy
const nums = [4, 5, 4, 7, 65];
const nums2 = nums;
const nums3 = [...nums]; //copying
nums.push(12);
console.log(nums);
console.log(nums2);
console.log(nums3);
