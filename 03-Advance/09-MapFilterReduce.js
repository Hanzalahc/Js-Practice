const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter
const filtered = num.filter((num) => num > 5);
// console.log(filtered);
// console.log(num);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

const goodBooks = books.filter((book) => book.rating > 4.3); // returns an array of whole objects
// console.log(goodBooks);

// Map

const bookTitles = books.map((book) => book.title); // returns an array of titles
// console.log(bookTitles);

// Find
const findBook = books.find((book) => book.title === "American Gods"); // returns the first object that matches the condition
// console.log(findBook);

// Reduce
const totalRating = books.reduce((acc, book) => {
  return acc + book.rating;
}, 0);

// console.log(totalRating); // returns the sum of all ratings


// Chaining all together

const highRating = books
  .filter((book) => book.rating > 4.3)
  .reduce((acc, book) => {
    return acc + book.rating;
  }, 0);

console.log(highRating.toFixed(2)); // returns the sum of all ratings of books with rating > 4.3
