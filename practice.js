// Show sum of 4 and 6

const numbers = (num1, num2) => {
  console.log(num1 + num2);
};
numbers(4, 6);

// arr = [2, 3, 4, 5]; Answer will be: 14

const arr = [2, 3, 4, 5];
let sum = 0;

for (let num of arr) {
  sum += num;
}
console.log(sum);
