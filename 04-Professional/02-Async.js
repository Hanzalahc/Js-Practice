/*

Execute code line by line because js is synchronous language. Code are of two types:
1. Blocking code: Code that takes time
2. Non-blocking code: Code that doesn't take time



*/

// SetTimeout
console.log("Start");
let timeout = setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("End");

// SetInterval
console.log("Start");
let interval = setInterval(() => {
  console.log("Inside setInterval");
}, 2000);
console.log("End");

// ClearInterval & ClearTimeout

clearTimeout(timeout);
clearInterval(interval);
