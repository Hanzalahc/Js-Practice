// 03 - Date

const now = new Date();
console.log(now);
console.table({
  toString: now.toString(),
  toDateString: now.toDateString(),
  toTimeString: now.toTimeString(),
  toLocaleString: now.toLocaleString(),
  customLocaleString: now.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }),
  toLocaleDateString: now.toLocaleDateString(),
  toLocaleTimeString: now.toLocaleTimeString(),
  toUTCString: now.toUTCString(),
  toISOString: now.toISOString(),
});

// Date Methods
let date = Date.now();
console.log(date);
// console.log(date.toLocaleString());