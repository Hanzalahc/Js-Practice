// Lexical Scopeing: The ability of a function to access its parent scope

function PrintName() {
  let name = "John";

  function Print() {
    console.log(name);
  }

  Print();
}
// console.log("PrintName", name); // Error:

PrintName();

// Closure: The ability of a function to access its parent scope even after the parent function has closed

function PrintNameClosure() {
  let name = "Devc";
  const age = 30  

  function Print() {
    console.log(name);
  }

  return Print; // pass function ref now, Now whole outer function scope is also passed
}

const Print = PrintNameClosure();


Print();  

