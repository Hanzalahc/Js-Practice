let a = 100;
const b = 200;
var c = 300;
if (true) {
  console.log("Inside if block");
  a = 10;
  // b = 20;
  c = 30;
}

console.table({ a, b, c }); // ReferenceError: a & b is not defined

// {} scope

let name = "John";
let age = 10;

if (true) {
  let age = 20;
  name = "Jane";
  console.log(name);
  console.log(age);
}
console.log(name);
console.log(age);
