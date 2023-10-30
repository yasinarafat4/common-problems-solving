// Show sum of 4 and 6
function sum(num1, num2) {
  console.log(num1 + num2);
}
// sum(4, 6);
// --------------------------------
// arr = [2, 3, 4, 5]; Answer will be: 14
function sum(...arr) {
  let sumOfNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfNum += arr[i];
  }
  return sumOfNum;
}
// console.log("sum =", sum(2, 3, 4, 5));

// Another way

const arr = [2, 3, 4, 5];
let s = 0;

for (let number of arr) {
  s += number;
}
console.log(s);

console.log(sum);

// ----------------------------------

// Check if the number is Prime
function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
// console.log(isPrimeNumber(9));

// arr = [2,3,4,5,7] findout even and odd numbers from the array

// show the even numbers between 412 to 456
var even = 412;
while (even <= 456) {
  // console.log(even);
  even += 2;
}

// show the odd numbers between 581 to 623
var odd = 581;
while (odd <= 623) {
  // console.log(odd);
  odd += 2;
}

// show the price is less than 200
var booksPrice = [130, 230, 100, 200, 199, 150, 210, 300];
var lowBooksPrice = 0;

for (var i = 0; i < booksPrice.length; i++) {
  if (booksPrice[i] > 200) continue;
  lowBooksPrice = booksPrice[i];
  // console.log(lowBooksPrice);
}

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.
const fruits = ["Apple", "Banana", "Orange"];

const bananaIndex = fruits.indexOf("Banana");
fruits[1] = "Mango";
fruits.pop();
fruits.push("Watermelon");
// console.log(fruits);

// Write a function findOddSum() that will take the array [5, 8, 9, 18, 45, 33] as the input parameter and will return the sum of the odd numbers.
function getSumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    //  sum += numbers[i];
    const index = i;
    const element = numbers[index];
    sum += element;
    // console.log(index, element, sum);
  }
  return sum;
}

function findOddNumbers(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
      // element % 2 !== 0
      // console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbers = [5, 8, 9, 18, 45, 33];
const oddNumbers = findOddNumbers(myNumbers);
// console.log(oddNumbers);
const oddNumbersSum = getSumNumbers(oddNumbers);
// console.log("odd numbers sum:", oddNumbersSum);

// Remove the duplicate elements from an array

// String
// let chars = ["A", "B", "A", "C", "B"];
// let uniqueChars = [...new Set(chars)];
// console.log(uniqueChars);

//  Another way Using a for loop
let chars = ["A", "B", "A", "C", "B"];
let uniqueChars = [];

for (let char of chars) {
  if (!uniqueChars.includes(char)) {
    uniqueChars.push(char);
  }
}
// console.log(uniqueChars);

// Number
let num = [2, 3, 4, 5, 4, 6, 7, 7, 7];
let uniqueNum = [...new Set(num)];
// console.log(uniqueNum);

// Using this keyword

const person = {
  firstName: "Yasin",
  lastName: "Arafat",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(person.fullName());
