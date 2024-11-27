// 03 - Date

const now = new Date();
console.log(now);
console.table({
  toString: now.toString(),
  toDateString: now.toDateString(),
  toTimeString: now.toTimeString(),
  toLocaleString: now.toLocaleString(),
  toLocaleDateString: now.toLocaleDateString(),
  toLocaleTimeString: now.toLocaleTimeString(),
  toUTCString: now.toUTCString(),
  toISOString: now.toISOString(),
});

// Date Methods
let date = Date.now();
console.log(date);
// console.log(date.toLocaleString());

