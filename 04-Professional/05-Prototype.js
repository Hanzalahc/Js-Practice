/*

JS has prototype behavior by default and it keeps accesing elemenst for solution until null is found. This give us Classes and New & This keyword. 

Everything in Js is an object and object goes to null. 

*/

// New Keyword

function createUser(name, score) {
  this.name = name;
  this.score = score;
}

// injecting a function to the prototype
createUser.prototype.increment = function () {
  this.score++; // only increase score of the current object
};

createUser.prototype.printMe = function () {
  console.log(this.name, this.score);
};

const user1 = new createUser("Eva", 9); // new keyword is constructor function, If you dont use it, it wont create a new object and will overwrite the existing object. New gave context to this keyword. New onject is created and this is pointing to that object. Prototype is created and it is pointing to the object.
const user2 = new createUser("John", 5);

user1.printMe();
user2.printMe();
user1.increment();
user1.printMe();
user2.printMe();

// Prototype

let name = "John      ";

Object.prototype.trueLength = function () {
  // this has the value of the object passed to it. {name: "John       "   }
  return this.trim().length;
};

console.log("Name Length:", name.trueLength());

let arr = [1, 2, 3, 4, 5];
let hero = {
  name: "Batman",
  age: 30,
};

Object.prototype.heroPower = function () {
  console.log("I am Batman");
};

Array.prototype.getPower = function () {
  console.log("I am Array");
};

console.log(hero.heroPower());
console.log(arr.heroPower());
console.log(arr.getPower());
// console.log(hero.getPower()); // Error all passes through object so it will work for array but not for object.

// Inheritance

const teacher = {
  make: true,
  teach: true,
};

const student = {
  learn: true,
};

const TA = {
  makeAssignment: true,
  // __proto__: teacher,
};

// teacher.__proto__ = student;

// console.log(TA.learn);

// Modern Syntax

Object.setPrototypeOf(TA, teacher);
Object.setPrototypeOf(teacher, student);

console.log(TA.learn);
