// For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// loop inside loop
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(i, j);
  }
}

// Break & Continue
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break; // break the loop
  }
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; // skip the current iteration
  }
  console.log(i);
}

// While Loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do While Loop
let j = 0;

do {
  console.log(j);
  j++;
} while (j <= 10);
