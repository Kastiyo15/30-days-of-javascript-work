
/* 'Higher order functions' take other functions as a parameter or return a function as a value.
The function passed as a parameter is called a 'callback' */

/* CALLBACK */
/* A callback is a function which can be passed as a parameter to another function. example: */

// This is the callback function
const callback = (n) => {
  return n ** 2; // ** means to the power of
};

// this function takes another function as a callback
function cube(callback, n) {
  return callback(n) * n;
};

console.log(cube(callback, 3));


/* RETURNING FUNCTION */
/* Higher order functions return a function as a value */

// Higher order functions returning another function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  }
  return doSomething;
}
console.log(higherOrder(2)(3)(10));


/* See where we use callback functions. For instance, the forEach method uses callback */

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  }
  arr.forEach(callback); // forEach takes a function as an input parameter
  return sum;
}
console.log(sumArray(numbers));

/* We can simplify this example by writing the function within the forEach input parameter */

const numbers2 = [1, 2, 3, 4, 5];
const sumArray2 = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
}
console.log(sumArray2(numbers2));


/* SETTING TIME */
/* We can execute some activities in a certain interval of time or we can schedule for some time to execute activities:
- setInterval
- setTimeout */

/* setInterval function */ /* RUNS CODE INDEFINITELY */
/* We can use the setInterval higher order function to do some activity continuously within an interval of time. This takes a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be run after the duration indefinitely*/

// syntax
/* 
function callback() {
  //code goes here
}
setInterval(callback, duration); 
*/

function sayHello() {
  console.log("Hello");
};
setInterval(sayHello, 1000);


/* setTimeout function */ /* RUNS CODE ONCE */
/* executes function at some point in the future */
setTimeout(sayHello, 2000);
