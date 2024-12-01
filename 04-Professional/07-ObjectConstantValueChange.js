const myObj = {
  name: "John",
  age: 30,
};

// Object.freeze(myObj);
const value = Object.getOwnPropertyDescriptors(myObj);
// { name: { value: 'John', writable: true, enumerable: true, configurable: true },
// console.log(value);

Object.defineProperties(myObj, {
  name: {
    value: "John",
    writable: false,
  },
  age: {
    value: 30,
    writable: false,
  },
});

console.log(myObj);
const newVal = Object.getOwnPropertyDescriptors(myObj);
// console.log(newVal);

// for (let key in myObj) {
//   console.log("Keys of OBJ:", key);
// }

for (const [key, value] of Object.entries(myObj)) {
  console.log(`${key}: ${value}`);
}

// console.log("Pi Value:", Math.PI);

const pi = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pi); // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

// Object Getter and Setter

const User = {
  _name: "John",
  get name() {
    return this._name.toUpperCase();
  },
  set name(value) {
    this._name = value;
  },
};

const user1 = Object.create(User);
console.log(user1.name);
