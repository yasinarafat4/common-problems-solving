// Show sum of 4 and 6

const numbers = (num1, num2) => {
  console.log(num1 + num2);
};
// numbers(4, 6);

// arr = [2, 3, 4, 5]; Answer will be: 14

const arr = [2, 3, 4, 5];

for (let num of arr) {
  let sum = 0;
  sum += num;
  // console.log(sum);
}
// console.log(sum);

const arr2 = [1,23,4]

const sumOfNum = (arr)=>{
let s=0;
for(let num of arr){
  s += num;
}
return s;
}

console.log(sumOfNum(arr2));