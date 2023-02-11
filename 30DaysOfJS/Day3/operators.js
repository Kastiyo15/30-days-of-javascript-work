// ASSIGNMENT OPERATORS
x = 3
y = 5
/* 
(x = y)
(x += y)
(x -= y)
(x *= y)
(x /= y)
(x %= y)
(x **= y) */


// ARITHMETIC OPERATORS
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7, 1, 12, 1.33, 1, 64


const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in °C, boiling point of water
const bodyTemp = 37       // body temperature in °C


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 °C.
 Human body temperature is 37 °C.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
    `The boiling point of water is ${boilingPoint} °C.\nHuman body temperature is ${bodyTemp} °C.\nThe gravity of earth is ${gravity} m / s2.`
    )


// COMPARISON OPERATORS
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


// LOGICAL OPERATORS
// && ampersand operator example
let check = null
check = 4 > 3 && 10 > 5         // true && true -> true
check = 4 > 3 && 10 < 5         // true && false -> false
check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example
check = 4 > 3 || 10 > 5         // true  || true -> true
check = 4 > 3 || 10 < 5         // true  || false -> true
check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples
check = 4 > 3                     // true
check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true


// INCREMENT OPERATOR
// pre-increment
count = 0
console.log(++count)    // 1
console.log(count)      // 1

// post-increment
count = 0
console.log(count++)    // 0
console.log(count)      // 1


// DECREMENT OPERATOR
// pre-decrement
count = 0
console.log(--count)    // -1
console.log(count)      // -1

// post-decrement
count = 0
console.log(count--)    // 0
console.log(count)      // -1


// TERNARY OPERATORS
// Ternary operator allows us to write a condition.
// bool ? {if true} : {if false}
isRaining = true
isRaining ? console.log('You need a rain coat') : console.log('No need for a rain coat')
isRaining = false
isRaining ? console.log('You need a rain coat') : console.log('No need for a rain coat')


// WINDOW CONFIRM() METHOD
// confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
const agree = confirm('Are you sure you want to delete? ')
console.log(agree) // result will be true or false based on what you click