/* Day 1: Exercises
Write a single line comment which says, comments can make code readable
Write another single comment which says, Welcome to 30DaysOfJavaScript
Write a multiline comment which says, comments can make code readable, easy to reuse and informative

Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
Declare four variables without assigning values
Declare four variables with assigned values
Declare variables to store your first name, last name, marital status, country and age in multiple lines
Declare variables to store your first name, last name, marital status, country and age in a single line
Declare two variables myAge and yourAge and assign them initial values and log to the browser console. */


// comments can make code readable
// Welcome to 30DaysOfJavaScript
/* comments can make code readable,
easy to use and informative */

// let is used for variables which can change
// const is used for constants
// use camelCase for variable names


// using let for variables
let firstName = 'Max' // string
let lastName = 'Bedford' // string
let age = '22' // integer
let isCool = true // bool
console.log(firstName, lastName, age, isCool)


// declaring number value variables
const gravity = 9.81 // earth gravity in m/s2
const boilingPoint = 100 // water boiling point
console.log(gravity, boilingPoint)


// declaring multiple variables in one line, seperated by comma
let firstName2 = 'Mona',
    lastName2 = 'Burridge',
    age2 = '23'
console.log(firstName2, lastName2, age2)


// declaring undefined variables
let country
let city
let emptyValue = null
let time


// Comparing variables
let myAge = 22
let yourAge = 23
console.log('', 'I am', myAge, 'years old.', '\n', 'You are', yourAge, 'years old.')
