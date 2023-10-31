/* The most commonly used array methods in JavaScript with examples:*/

// 1. push(): Adds one or more elements to the end of an array and returns the new length.
const numbers = [1, 2, 3];
numbers.push(4, 5);
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

//-------------------------------------------------------------------------------------
// 2. pop(): Removes the last element from an array and returns that element.
const fruits = ["apple", "banana", "cherry"];
const removedFruit = fruits.pop();
// console.log(removedFruit);  Output: 'cherry'
// console.log(fruits);  // Output: ['apple', 'banana']

//-------------------------------------------------------------------------------------
// 3. unshift(): Adds one or more elements to the beginning of an array and returns the new length.
const fruits2 = ["banana", "apple", "cherry"];
const newLength1 = fruits2.unshift("orange");
// console.log(fruits2); // Output: ["orange", "banana", "apple", "cherry"]
// console.log(newLength1); // Output: 4 (new length of the array)

//-------------------------------------------------------------------------------------
// 4. shift(): Removes the first element from an array and returns that element.
const fruits3 = ["banana", "apple", "cherry", "orange"];
const newElement = fruits3.shift();
// console.log(fruits3); // Output: [ 'apple', 'cherry', 'orange' ]
// console.log(newElement); // Output: "banana" (the removed element)

//-------------------------------------------------------------------------------------
// 5. concat(): Combines two or more arrays and returns a new array.
const arr1 = [1, 2, 5];
const arr2 = [4, 3];
const combined = arr1.concat(arr2);
// console.log(combined); // Output: [ 1, 2, 5, 4, 3 ]

//-------------------------------------------------------------------------------------
// 6. join(): Joins all elements of an array into a string.
const fruits4 = ["apple", "banana", "cherry"];
const joinedFruits = fruits4.join(", "); // Join elements with a comma and space
// console.log(joinedFruits); // Output: "apple, banana, cherry"

//-------------------------------------------------------------------------------------
// 7. slice(): Extracts a section of an array and returns a new array.
const numbers3 = [1, 2, 3, 4, 5];
const slicedNumbers = numbers3.slice(1, 4); // Extract elements from index 1 to 3
// console.log(slicedNumbers); // Output: [2, 3, 4]

//-------------------------------------------------------------------------------------
// 8. splice(): Changes the contents of an array by removing, replacing, or adding elements.
// Removing:
const numbers4 = [1, 2, 3, 4, 5];
// Remove two elements starting at index 2
const removedElements = numbers4.splice(2, 2);
// console.log(numbers4); // Output: [1, 2, 5]
// console.log(removedElements); // Output: [3, 4]

// Replacing
const fruits5 = ["apple", "banana", "cherry"];
// Replace 'banana' with 'orange'
fruits5.splice(1, 1, "orange");
// console.log(fruits5); // Output: ["apple", "orange", "cherry"]

// Adding:
const colors = ["red", "green", "blue"];
// Insert 'orange' and 'purple' at index 2
colors.splice(2, 0, "orange", "purple"); // The 0 as the second argument indicates that no elements should be removed
// console.log(colors); // Output: ["red", "green", "orange", "purple", "blue"]

//-------------------------------------------------------------------------------------
// 9. indexOf(): Returns the first index at which a given element is found in the array, or -1 if not found.
const numbers6 = [10, 20, 30, 40, 50];
const index = numbers6.indexOf(30); // Find the index of '30'
// console.log(index); // Output: 2 (index of '30' in the array)

//-------------------------------------------------------------------------------------
// 10. lastIndexOf(): Returns the last index at which a given element is found in the array, or -1 if not found.
const numbers7 = [20, 10, 20, 30, 20, 40, 50];
const lastIndex = numbers7.lastIndexOf(20); // Find the last index of '20'
// console.log(lastIndex); // Output: 4 (last index of '20' in the array)

//-------------------------------------------------------------------------------------
// 11. filter(): Creates a new array with all elements that fulfilled the condition.
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

//-------------------------------------------------------------------------------------
// 12. map(): Creates a new array with the results of calling a provided function on each element in the array.
const numbers8 = [1, 2, 3, 4, 5];
// Using map to square each number in the array
const squaredNumbers = numbers8.map(function (num) {
  return num * num;
});
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//-------------------------------------------------------------------------------------
// 13. reduce(): Reduces an array to a single value (from left to right) using a provided function.
const numbers9 = [1, 2, 3, 4, 5];
const sum = numbers9.reduce((accumulator, current) => accumulator + current, 0); //// 0 is the initial value of the accumulator
// console.log(sum); // Output: 15 (sum of all elements)

//-------------------------------------------------------------------------------------
// 14. reduceRight(): Reduces an array to a single value (from right to left) using a provided function.
const numbers10 = [1, 2, 3, 4, 5];
const reverseConcatenation = numbers10.reduceRight(
  (accumulator, current) => accumulator + " - " + current,
  "Initial Value"
);
// console.log(reverseConcatenation); // Output: "Initial Value - 5 - 4 - 3 - 2 - 1"

//-------------------------------------------------------------------------------------
// 15. find(): Returns the first element in an array that satisfies a provided testing function.
const numbers11 = [10, 20, 30, 40, 50];
const result = numbers11.find((element) => {
  return element > 25;
});
// console.log(result); // Output: 30 (the first element greater than 25)

//-------------------------------------------------------------------------------------
// 16. findIndex(): Returns the index of the first element in an array that satisfies a provided testing function.
const numbers12 = [10, 20, 30, 40, 50];
// Find the index of the first element greater than 25
const result2 = numbers12.findIndex((element) => {
  return element > 25;
});
// console.log(result2); // Output: 2 (the index of the first element greater than 25)

//-------------------------------------------------------------------------------------
// 17. forEach(): Executes a provided function once for each array element.
const colors2 = ["red", "green", "blue"];
colors2.forEach((color) => {
  //   console.log(color);
});
// Output:
// "red"
// "green"
// "blue"

//-------------------------------------------------------------------------------------
// 18. every(): Tests whether all elements in the array pass the condition.
const numbers13 = [2, 4, 6, 8, 10];
// Check if all numbers are even
const areAllEven = numbers13.every((number) => {
  return number % 2 === 0;
});
// console.log(areAllEven); // Output: true (all numbers are even)

//-------------------------------------------------------------------------------------
// 19. some(): Tests whether at least one element in the array passes the codition.
const numbers14 = [1, 2, 3, 9, 5];
// Check if at least one number is even
const isAnyEven = numbers14.some((number) => {
  return number % 2 === 0;
});
// console.log(isAnyEven); // Output: true (there's at least one even number)

//-------------------------------------------------------------------------------------
// 20. sort(): Sorts the elements of an array in place and returns the sorted array.

// Sort the array alphabetically:
const fruits8 = ["banana", "apple", "cherry", "date"];
fruits8.sort();
// console.log(fruits8); // Output: ["apple", "banana", "cherry", "date"]

// Sort the array numerically
const numbers15 = [3, 7, 1, 4, 9, 2, 6, 8, 5];
numbers15.sort();
// console.log(numbers15); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort the array Ascending order
const numbers16 = [3, 7, 1, 4, 9, 2, 6, 8, 5];
numbers16.sort((a, b) => {
  return a - b;
});
// console.log(numbers16); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort the array Descending order
const numbers17 = [3, 7, 1, 4, 9, 2, 6, 8, 5];
numbers17.sort((a, b) => {
  return b - a;
});
// console.log(numbers17); // Output: [ 9, 8, 7, 6, 5, 4, 3, 2, 1]

//-------------------------------------------------------------------------------------
// 21. reverse(): Reverses the order of the elements in an array in place.
const numbers18 = [1, 2, 3, 4, 5];
// Reverse the array
numbers18.reverse();
// console.log(numbers18); // Output: [5, 4, 3, 2, 1]

//-------------------------------------------------------------------------------------
// 22. includes(): Checks if an array contains a certain element and returns true or false.
const fruits6 = ["apple", "banana", "cherry"];
const hasBanana = fruits6.includes("banana");
// console.log(hasBanana); // Output: true

//-------------------------------------------------------------------------------------
// 23. Array.isArray(): Determines whether the passed value is an array.
const isArray = Array.isArray([1, 2, 3]);
// console.log(isArray); // Output: true

//-------------------------------------------------------------------------------------
// 24. Array.from(): Creates a new Array instance from an array-like or iterable object.
const iterable = "hello";
const newArray = Array.from(iterable);
// console.log(newArray); // Output: ["h", "e", "l", "l", "o"]

//-------------------------------------------------------------------------------------
// 25. Array.of(): Creates a new Array instance with a variable number of elements.
const numbs = Array.of(1, 2, 3, 4, 5);
// console.log(numbs); // Output: [1, 2, 3, 4, 5]
