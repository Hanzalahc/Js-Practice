// Promises object results in eventually completing a task, or failing to do so. It has 3 states - pending, fulfilled, or rejected.

// Promise syntax using new Promise Or Async/Await and futher using .then() and .catch() to handle the promise or using try catch block.

// Creating a promise
const promise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

// Consuming a promise
promise
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((message) => {
    console.log("This is in the catch " + message);
  });

// Another example

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 3000);
})
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((message) => {
    console.log("This is in the catch " + message);
  })
  .finally(
    console.log("This is in the finally. This will always run regardless.")
  );

// Chaining promises
const chainedPromise = new Promise((resolve, reject) => {
  const data = { id: 1, name: "John Doe" };
  resolve(data);
});

chainedPromise
  .then((data) => {
    console.log("First then: ", data);
    data.age = 30;
    return data;
  })
  .then((data) => {
    console.log("Second then: ", data);
    data.location = "New York";
    return data;
  })
  .then((data) => {
    console.log("Third then: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// Pormise using Async/Await using try catch
const asyncFunction = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

asyncFunction();

// Async/Await using then catch
const asyncFunction2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};

asyncFunction2()
  .then(() => {
    console.log("This is in the then");
  })
  .catch((error) => {
    console.log(error);
  });
