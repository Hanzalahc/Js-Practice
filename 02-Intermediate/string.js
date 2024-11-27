// 01 - Strings

const name = "John";
const age = 30;

// Concatenation
// console.log("My name is " + name + " and I am " + age);
// console.log(name + age);

// Template String or String Interploation || Modern way
// console.log(`My name is ${name} and I am ${age}`);

// String Methods
const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
// console.log(s.__proto__);
console.log(s.charAt(0));
console.log(s.charAt(s.length - 1));
console.log(s.indexOf("o"));
console.log(s.lastIndexOf("o"));

console.log(s.substring(0, 5));
console.log(s.slice(0, 5));
console.log(s.slice(-0, -5));
const goodName = "         JohnDoe                 ";
console.log(goodName.trim());

console.log(s.replace("World", "There"));
console.log(s.includes("World"));
// console.log(s.split(""));
// console.log(s.splice(""));
