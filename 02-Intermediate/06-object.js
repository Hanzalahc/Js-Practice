// 06 - Objects

const symbol = Symbol("This is my first Symbol");
const user = {
  firstName: "John",
  lastName: "Doe",
  "fullName": "John Doe",
  age: 30,
  valid: true,
  hobbies: ["music", "movies", "sports"],
  [symbol]: "I am a Symbol",
  function: function () {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};

console.log(user);
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user["fullName"]); // cant access using . now
console.log(user[symbol]);
console.log(user.hobbies.map((hobby) => hobby));
user.function();

// Frezze the object
Object.freeze(user);
user.firstName = "Jane";
console.log(user.firstName);
