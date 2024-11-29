// 9 - Functions

function myName(name = "sam") {
  // parameter
  console.log(`Hello ${name}`);
}

myName("John"); // argumnent

// Function Return
function add(a, b) {
  return a + b;
}

const result = add(5, 5);
console.log(result);
