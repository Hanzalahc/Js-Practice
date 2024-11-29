// 03 - Summary

// non primitive data types
// you get their reference when you assign them to a variable

const heroArray = ["Batman", "  Superman"];

const obj = {
  name: "Batman",
  age: 30,
};

const fun = function () {
  console.log("Hello");
};

console.table({
  heroArray: { value: heroArray, type: typeof heroArray },
  obj: { value: obj, type: typeof obj },
  fun: { value: fun, type: typeof fun },
});
