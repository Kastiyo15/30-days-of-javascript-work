/* A function can be declared or created in couple of ways:

- Declaration function
- Expression function
- Anonymous function
- Arrow function */

/* Function Declaration */
function functionName() {
    //code goes here
}
functionName(); // calling function by its name


/* Function without parameter and no return */
function square() {
    let num = 2;
    let sq = num * num;
    console.log(`Square of ${num}^${num} = ${sq}`);
}

square(); // 4


/* Function returning value */
function printFullName() {
    let firstName = 'Max';
    let lastName = 'Bedford';
    let fullName = firstName + ' ' + lastName;

    return fullName;
}

console.log(`Full name: ${printFullName()}`)


/* Function with parameter */
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}

console.log(`Area of circle: ${areaOfCircle(10)}`);


/* Function with multiples parameters */
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const numbers = [1, 9, 4, 68, 24, 16, 29, 77]
console.log(`Sum of array values: ${sumArrayValues(numbers)}`)


/* Function with unlimited parameters - use 'argument' object */
function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(`Sum of all numbers: ${sumAllNums(59, 27, 28, 5, 1, 56, 28, 44, 87, 99, 27, 91)}`)


/* Unlimited parameters in Arrow Function - dont' have access to argument object - can have any parameter name */
const sumAllNumbers = (...args) => {
    let sum = 0;
    for (const element of args) {
        sum += element;
    }
    return sum;
}

console.log(`Sum of all numbers (arrow): ${sumAllNumbers(82, 49, 19, 22, 42, 75, 65, 276)}`)


/* Anonymous functions - functions without name */
const anonymousFun = function () {
    console.log('I am an anonymous function. My value is stored in anonymousFun variable.')
}

anonymousFun();


/* Expression Function - anonymous functions, but assigned a variable and return a value */
const cube = function (n) {
    return Math.pow(n, 3);
}

console.log(`Cubed value: ${cube(3)}`);


/* Self invoking Functions - anonymous, don't need to be called to return a value */
let squaredNum = (function (n) {
    console.log(n * n)
})(2) // 4, return and store the data


/* Arrow function - uses arrow instead of function keyword */
const cubed = n => n * n * n; // -> 8
console.log(`Cubed: ${cubed(2)}`);

const changeToUpperCase = arr => {
    const newArr = [];
    for (const element of arr) {
        newArr.push(element.toUpperCase());
    }
    return newArr;
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


/* Functions with default parameters - if no argument is passed, the default value is used*/
function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newtons with mass 100 and Earth gravity:', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newtons with mass 100 and moon gravity:', weightOfObject(100, 1.62)) // gravity at surface of Moon

const greetings = (name = 'Max') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
}

console.log(greetings())
console.log(greetings('Bedford'))