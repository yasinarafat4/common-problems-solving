const number = (num1, num2) => {
  // console.log(num1+num2);
};

number(2, 4);

// Findout sum of 3,4,5

function sum(num1, num2, num3) {
  // console.log(num1 + num2 + num3);
}
sum(3, 4, 5);

// findout the unique number
const num = [1, 2, 2, 2, 3, 4, 4];

const uniqueNum = [...new Set(num)];
// console.log(uniqueNum);

for (i = 2; i <= 10; i += 2) {
  // console.log("even", i);
}

for (i = 1; i <= 10; i += 2) {
  // console.log("odd", i);
}


for (var i = 1; i <= 20; i++){
  if(i > 10){
      // break;
      // console.log(i);
  }
// console.log('break',i)
}

for (var i = 1; i <= 100; i++){
  if(i < 50){
      continue;
  }
  // console.log('continue now',i)
}

var numbs = [1,2,3,4,5,6,7,8,9];
// console.log(numbs.slice(3, 6));

var come = "He is Coming";
// console.log(come.substring(3, 9));
 
var numbs = [0,1,2,3,4,5,6,7,8,9];
console.log(numbs.includes(0));

