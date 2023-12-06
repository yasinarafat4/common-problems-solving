// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       x = 1;
//       y = 2;
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();

// // Output: 1
// //         undefined
// //         2

// const age = 100;

// if (age >= 70) {
//   console.log("He is Bura Manus");
// } else {
//   console.log("He is Jubok");
// }

// loop
const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
