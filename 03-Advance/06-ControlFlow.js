// if

const isLogin = true;

if (isLogin) {
  console.log("You are logged in");
} else {
  console.log("You are not logged in");
}

// or; //

if (!isLogin) {
  console.log("You are not logged in");
}

// multiple if inside

// triple equal

const a = 1;

if (a === 1) {
  console.log("a is 1");
} else if (a === 2) {
  console.log("a is 2");
} else {
  console.log("a is not 1 or 2");
}

// implicit

const c = 1;
if (c) console.log("c is truthy"); // one line if

// ternary operator

const b = 2;
const result = b === 1 ? "b is 1" : "b is not 1";

// nullish coalescing operator

let v1;
v1 = 5 ?? 10;
console.log(v1);
v1 = null ?? 10;
v1 = undefined ?? 10;

// &&

const d = 1;
const e = 2;

if (d === 1 && e === 2) {
  console.log("d is 1 and e is 2");
}

// ||

const f = 1;
const g = 2;

if (f === 1 || g === 1) {
  console.log("f or g is 1");
}

// switch

const h = 1;

// check all code even if condition is met except default

switch (h) {
  case 1:
    console.log("h is 1");
    break;
  case 2:
    console.log("h is 2");
    break;
  default:
    console.log("h is not 1 or 2");
}

// Truthy and Falsy Values

// Falsy
// false
// 0 & -0
// ""
// null
// undefined
// NaN

// Truthy
// true
// 1
// " "
// "0"
// [] arr.length
// {} Object.keys().length
// function () {}

//
