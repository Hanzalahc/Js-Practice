// Does JS have Classes ? Yes, but they are not like classes in other languages. They are just syntactic sugar over the existing prototype-based inheritance.

// new keyword is constructor function, If you dont use it, it wont create a new object and will overwrite the existing object.

// 1. Constructor Function behind the scene of Classes - Old way
function Person(name, age) {
  this.name = name;
  this.age = age;

  return this; // This is not required, as it will return the object by default.
}

const person1 = new Person("John", 20);
console.log(person1);
console.log(person1.constructor); // [Function: Person] just ref of itself
console.log(person1 instanceof Person); // true

// Classes

class User {
  constructor(name, age, password) {
    // constructor is called whenn we create a new object using NEW keyword.
    this.name = name;
    this.age = age;
    this.password = password;
  }

  // Methods
  login() {
    console.log(`${this.name} is logged in.`);
  }

  encryptPassword() {
    console.log(`${this.name}'s password is encrypted.`);
  }

  static createId() {
    // Not available on the instance of the class, only available on the class itself.
    return Math.floor(Math.random() * 1000 + 1);
  }
}

const user1 = new User("John", 20, "12345");
console.log("User Class:", user1);
user1.login();
user1.encryptPassword();
// console.log(user1.createId()); // Error:
console.log(User.createId()); // Static method No Error

// Inheritance
class Admin extends User {
  constructor(name, age, password, role) {
    super(name, age, password); // super is used to call the parent class constructor. Replaced Call
    this.role = role;
    this.addUser(this); //.bind(this) not needed due to super calling the method when the constructor is called.
  }

  addUser(user) {
    console.log(`${user.name} is added.`);
  }

  deleteUser(user) {
    console.log(`${user.name} is deleted.`);
  }
}

const admin1 = new Admin("Admin", 30, "admin123", "Admin");
console.log("Admin Class:", admin1);
admin1.login();
admin1.encryptPassword();
console.log(Admin.createId()); // Static method No Error
// console.log(admin1.createId()); // Static method  Error
admin1.addUser(user1);
admin1.deleteUser(user1);
console.log(admin1 instanceof User); // true
console.log(admin1 instanceof Admin); // true
