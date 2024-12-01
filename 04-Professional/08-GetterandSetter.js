// If you wanna show something else when you get a property or set a property, you can use getter and setter. the varable name should be different from the getter and setter name. It is a good practice to use _ before the variable name. Othwerwise it will give call stack size exceeded error. The getter and setter function  should have the same name as of the constructor.

class User {
  constructor(name) {
    this.name = name;
  }
  // Getter
  get name() {
    return this._name.toUpperCase() + "!" + Math.random();
  }

  // Setter
  set name(value) {
    this._name = value;
  }

  // Method
  getName() {
    return this.name;
  }
}

const user = new User("John");
console.log(user.getName());
