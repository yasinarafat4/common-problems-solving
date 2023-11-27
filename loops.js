/* Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false . A loop will continue running until the defined condition returns false. Example:

text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

Instead of writing so many lines, we can write loop in just one line below:

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

There are several types of loops in JavaScript, including "for", "for/in", "for/of", "while", and "do/while". Here are examples of each:
*/

// For loop: The for loop is used when we know how many times we want to iterate. Example: Print numbers from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//-------------------------------------
// For/of Loop: The for/of loop lets us loop over iterable data structures such as Arrays. Example: Print numbers from 1 to 5 using for...of loop
const numberArray = [1, 2, 3, 4, 5];
for (const number of numberArray) {
  console.log(number);
}

//-------------------------------------
// For/in Loop: While the for...of loop is suitable for iterating over iterable objects like arrays, the for...in loop is used for iterating over the enumerable properties of an object.

// Using for...in loop to print numbers from 1 to 5
const numberArray2 = [1, 2, 3, 4, 5];
for (const index in numberArray2) {
  console.log(numberArray2[index]);
}

// Note: using for...in with arrays is not the recommended approach
// Using for...in loop with an object
const person = {
  name: "John",
  age: 30,
  job: "developer",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//-------------------------------------
// While Loop: The while loop is used when we don't know the number of iterations, and it continues as long as the specified condition is true. // Example: Print numbers from 1 to 5 using a while loop.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
//Note: For loop is the short form of while loop

//-------------------------------------
// Do-While Loop: The do-while loop is similar to the while loop,but it will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. Example: Print numbers from 1 to 5 using a do-while loop
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);
