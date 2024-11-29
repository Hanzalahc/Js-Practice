// 04- Array

// Non Primitive Data Type
// create shallow copy and deep copy mdn for resource
// splice, reverse, are mostly deep copy as they alter the original array while slice, concat are shallow copy

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const heroArr = ["Batman", "Superman", "Spiderman", "Ironman"];
const mixxedArr = [1, "Batman", true, 3.14, [1, 2, 3], { name: "Batman" }];

// Accessing Array Elements
// console.table({
// myArr,
// heroArr,
// mixxedArr,
// });

// Push & Pop
myArr.push(11);
myArr.push(12);
myArr.pop();
// console.table({ myArr });

// Shift & Unshift
myArr.unshift(0);
myArr.unshift(0);
myArr.shift();
// console.table({ myArr });

// Methods
console.table({
  includes: myArr.includes(5),
  indexOf: myArr.indexOf(5),
  join: myArr.join(","),
  slice: myArr.slice(2, 5), // array copy from index 2 to 4, leaving 5th
  splice: myArr.splice(2, 5), // orignal array remove from index 2 to 5 elmenets
  // concat: myArr.concat(heroArr), // old way
  concat: [...myArr, ...heroArr], // new way
});
