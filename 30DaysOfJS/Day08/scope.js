/* SCOPE */
// Variable is a fundamental part of programming. We can have different variable scopes:
// - Global
// - Local
// Anything declared without let, var or const is declared a global variable.


/* GLOBAL SCOPE */
// Global can be relative to the file or to some block of codes
function globalScope() {
  console.log("\nGlobal Scope");

  let a = 'JavaScript'; // global scope, found anywhere in this file
  let b = 10; // global scope

  function letsLearnScope() {
    console.log(a, b); // JavaScript 10, accessible

    if (true) {
      let a = 'Python';
      let b = 100;
      console.log(a, b); // Python 100
    }

    console.log(a, b);
  }

  letsLearnScope();
  console.log(a, b); // JavaScript 10, accessible

}

globalScope();


/* LOCAL SCOPE */
// Can only be accessed in certains blocks of code, let and const are block scoped variables
// - Block Scope
// - Function Scope
function localScope() {
  console.log("\nLocal Scope");

  let a = 'JavaScript'; // global scope, found anywhere in this file
  let b = 10; // global scope

  function letsLearnScope() {
    console.log(a, b); // JavaScript 10, accessible
    let value = false;

    // block scope
    // if you do not add 'let' to the front of 'a' and 'b' then they will be modified instead
    if (true) {
      // we can access from the function and outside the function but
      // variables declared inside the if will not be accessed outside the if block
      let a = 'Python';
      let b = 20;
      let c = 30;
      let d = 40;
      value = !value;
      console.log(a, b, c, d, value); // Python 20 30 40 true
    }

    console.log(a, b, value); // JavaScript 10 true
  }

  letsLearnScope();
  console.log(a, b); // JavaScript 10, accessible

}

localScope();
