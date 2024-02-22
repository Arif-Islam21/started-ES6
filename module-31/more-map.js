const numbers = [12, 14, 23, 54, 23];

const doubled = numbers.map((n) => n * 2);
console.log(doubled);

const fiveBonus = numbers.map((n) => n + 5);
console.log(fiveBonus);

const friends = ["rahim", "karim", "mahim"];

const upperCase = friends.map((f) => f[0].toUpperCase());
console.log(upperCase);
