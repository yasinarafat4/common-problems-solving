// Write a function that devided all letters of the words as a diffent string. For example, if the input is "Hello", the output should be "H" "e" "l" "l" "o".

const divideSingleLetter = (inputString) => {
  return inputString.split("");
};
const input = "Hello";
const result = divideSingleLetter(input);
// console.log(result);

// ---------------------------------------------------------------------------------
// Write a function that devided all letters of the words as a string. For example, if the input is "Hello", the output should be "H e l l o".

const devideLetters = (inputString) => {
  return inputString.split("").join(" ");
};

const input2 = "Hello";
const result2 = devideLetters(input2);
// console.log(result2);

// Description: This function first splits the input string into an array of individual.letters and then it joins the letters back together with a space character in between them.
// ---------------------------------------------------------------------------------

// Write a function that takes a string as input and returns the string reversed. For example, if the input is "Hello, World!", the output should be "!dlroW ,olleH".

const reverseString = (inputString) => {
  return inputString.split("").reverse().join("");
};

const input3 = "Hello, World!";
const result3 = reverseString(input3);
// console.log(result3);

// Description: This function takes the input string, converts it into an array of characters using split(''), reverses the array using reverse(), and then joins the reversed array back into a string using join(''). The result is the reversed string.

// --------------------------------------------------------------------------------------
// Given a string containing multiple words, reverse the the words. For example, if the input is "Hello World", the output should be "World Hello".

const reverseWords = (inputString) => {
  return inputString.split(" ").reverse().join(" ");
};
const input4 = "Hello World";
const result4 = reverseWords(input4);
// console.log(result4);

// Description: This function first splits the input string into an array of words using the space character as the delimiter. It then reverses the order of the words and joins them back together with spaces to form the reversed string.

