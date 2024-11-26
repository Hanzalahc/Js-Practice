// 01- Variables

const userId = 1;

let userEmail = "han@gmail.com";

var userPassword = "123456";

let userState;

/* In JavaScript, let and var are both used to declare variables, but they have some important differences:

Scope:

var is function-scoped. This means that a variable declared with var is available throughout the entire function in which it is declared.
let is block-scoped. This means that a variable declared with let is only available within the block (e.g., { ... }) in which it is declared.

Prefable to use const & let Only*/

// works fine but not recommended
userCity = "Seoul";

console.table({ userId, userEmail, userPassword, userCity, userState });
// console.table([userId, userEmail, userPassword, userCity, userState]);

// userState is declared but not initialized, so it's value is undefined

// userId = 2; // Error
