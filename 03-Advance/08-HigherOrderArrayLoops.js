const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};
const string = "Hello World";

// For Of - not for objects - Can be used using Object.entries()
for (item of basket) {
  // console.log(item);
}

for (item of string) {
  // console.log(item);
}

// for ([key, value] of detailedBasket) {
// console.log(`Key: ${key}, Value: ${value}`); // Error - For Each does not work with objects
// }

//  Map data structure

const map = new Map(); // same key & values but they have unique keys
map.set("apples", 5);
map.set("oranges", 10);
map.set("grapes", 1000);

// console.log(map);

for ([key, value] of map) {
  // console.log(`Key: ${key}, Value: ${value}`);
}

// For In - works with objects but have keys by default & dont iterate through map

for (keys in detailedBasket) {
  // console.log(`Key: ${keys}, Value: ${detailedBasket[keys]}`);
}

// For Each - doesn't work with objects & returns undefined
basket.forEach((item, index, arr) => {
  // callback function so dont need named function
  // console.log(item);
});

// detailedBasket.forEach((item) => {
//   console.log(item);
// });

// Now Array of Objects using For Each

const array = [{ name: "Sally" }, { name: "John" }, { name: "Tim" }];

array.forEach((item, index) => {
  console.log(item.name);
});
