// Old way for super
// Call: inside function there can be more and this wont know which context we are talking about. So we can use call to specify the context.

function setUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username); // outsources the function setUserName to createUser || Super replace this keyword
  this.email = email;
  this.password = password;
}

const user1 = new createUser("John", "me@example.com", "12345");
console.log(user1);

// Bind

class React {
  constructor() {
    this.name = "React";
    this.server = "Node";
    this.port = 3000;
    this.handleClick = this.handleClick.bind(this); // bind the context of the Method to the class constructor
    this.getServer = this.getServer.bind(this);
  }

  getServer() {
    return this.server; // This reference will be lost in class constructor
  }

  handleClick() {
    console.log("Button clicked");
    console.log(this.name);
  }
}

const app = new React();
app.handleClick();
