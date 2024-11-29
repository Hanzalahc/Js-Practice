// 02- Data Types
"use strict"; // use strict mode and its by default in ES6

// Primitive/Value Types
let name = "Han";
let age = 25;
let isApproved = true;
let firstName; // undefined
let lastName = null; // represents the empty value
const bigInt = 1234567n;

// console.table({
//   name: { value: name, type: typeof name },
//   age: { value: age, type: typeof age },
//   isApproved: { value: isApproved, type: typeof isApproved },
//   firstName: { value: firstName, type: typeof firstName },
//   lastName: { value: lastName, type: typeof lastName },
// });

// DataType Conversion

let score = "30abc";
// let score = null;
// let score = undefined;
// console.log(score, typeof score);

// Convert string to number
// score = parseInt(score);
score = Number(score);
// console.log(score, typeof score);

// Operations
// let x = 10;
// let y = -x;
// console.log(y);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
