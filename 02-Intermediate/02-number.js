// 02 - Numbers

let score = 100.1;

//  Number Methods
console.log(score.toString());
console.log(score.toFixed(2));
console.log(score.toPrecision(3));
const num = 1000000;
console.log(num.toLocaleString("en-IN"));
// console.log(num.toExponential(2));

// Math Object
console.table({
  PI: Math.PI,
  Absolute: Math.abs(-100),
  Ceil: Math.ceil(5.1),
  Floor: Math.floor(5.9),
  Round: Math.round(5.5),
  Max: Math.max(1, 2, 3, 4, 5),
  Min: Math.min(1, 2, 3, 4, 5),
  Random: Math.random(),
  RandomBetween1And10: Math.floor(Math.random() * 10) + 1,
});

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20
