// "2-3%6-4,350,@" Find sum of the numbers using regex in the given string.

const string = "2-3%6-4,350,@"

// Using regular expression to find all numbers in the string
const numbers = string.match(/-?\d+/g);

// Initialize a variable to store the sum
let sum = 0;

// Check if numbers were found and sum them
if (numbers) {
  numbers.forEach((num) => {
    sum += parseInt(num, 10);
  });
}

console.log(sum); // Output: 351

