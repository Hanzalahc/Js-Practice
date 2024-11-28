// 07 - Objects

const userInfo = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const formatedUserInfo = {
  id: 1,
};

const user = {
  ...formatedUserInfo,
  ...userInfo,
};

// console.log(user);

// Array of objects

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 },
];

console.log(users);
console.log("Keys: ", Object.keys(user));
console.log("Values: ", Object.values(user));
console.log("Entries: ", Object.entries(user)); // Returns an array of arrays
console.log("has Porpery: ", user.hasOwnProperty("name"));
