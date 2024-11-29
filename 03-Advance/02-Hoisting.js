One(); // no error
function One() {
  const name = "One";
  console.log(name);
}

Two(); // Hositng error
const Two = function () {
  console.log("Two");
} 

