const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [num1, num2] = fs.readFileSync(filePath).toString().split('\n');

const oneNum = num2 % 10;
const tenNum = Math.floor((num2 % 100) / 10);
const hunderedNum = Math.floor(num2 / 100);

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hunderedNum);
console.log(num1 * num2);
