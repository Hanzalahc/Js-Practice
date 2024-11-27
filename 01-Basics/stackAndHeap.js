// primitive use stack and non primitive use heap

// primitive pass copy & non primitive pass reference

let name = "John";

let anotherName = name;

anotherName = "Jane";

console.log(name);
console.log(anotherName);

let user = {
  name: "John",
};

let anotherUser = user;

anotherUser.name = "Jane";

console.log(user);
console.log(anotherUser);
