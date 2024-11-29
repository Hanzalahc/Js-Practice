// 05 -  Array Functions

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const heroArr = ["Batman", "Superman", "Spiderman", "Ironman"];

console.log("Reverse", arr.reverse());
const joinArr = arr2.join(" ");
console.log("Join", joinArr, typeof joinArr, arr2);

// Array.find
const found = arr.find((element) => element === 5);
console.log("Find", found);

// Array.flat
const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log("Flat", arr3.flat(2));

// Array.from & Array.of
const arr4 = Array.from("hello");
console.log("Array from", arr4);
const arr5 = Array.of(1, 2, 3, 4, 5);


// Advanced Array Functions
