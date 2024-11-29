// arrow function doesn't have this

console.log(this); // window object

function One() {
  const name = "Hanza";

  console.log(this.name); // undefined
}

One();

// Arrow Function

const Two = () => {
  const name = "Hanza";

  console.log(this);
};

Two();

// implicit return
const Three = () => "Hanza"; // on eline dont need to write return
// const Three = () => ( "Hanza"; ) // same 
