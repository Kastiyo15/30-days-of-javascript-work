// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Max', lastName = 'Bedford', country = 'UK', city = 'Seaford', age = 22, isMarried = false, year = 2023
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)


// Check if type of '10' is equal to 10
console.log('10' === 10)    // false // typeof checks data type, == checks value, === checks datatype


// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)  // false


// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
let truthyOne = 'string'
let truthyTwo = true
let truthyThree = 15
console.log(truthyOne, truthyTwo, truthyThree)

// Write three JavaScript statement which provide falsy value.
let falseyOne = undefined
let falseyTwo = null
let falseyThree = 0
console.log(falseyOne, falseyTwo, falseyThree)


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3)          // true
console.log(4 >= 3)         // true
console.log(4 < 3)          // false
console.log(4 <= 3)         // false
console.log(4 == 4)         // true
console.log(4 === 4)        // true
console.log(4 != 4)         // false
console.log(4 !== 4)        // false
console.log(4 != '4')       // false
console.log(4 == '4')       // true
console.log(4 === '4')      // false
// Find the length of python and jargon and make a falsy comparison statement.
let stringOne = 'python'
let stringTwo = 'jargon'
let lengthOne = stringOne.length    // 6
let lengthTwo = stringTwo.length    // 6
console.log(lengthOne, lengthOne)   // 6, 6
console.log(lengthOne != lengthTwo) // false


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12)       // true && true == true
console.log(4 > 3 && 10 > 12)       // true && false == false
console.log(4 > 3 || 10 < 12)       // true || true == true
console.log(4 > 3 || 10 > 12)       // true || false == true
console.log(!(4 > 3))               // !true == false
console.log(!(4 < 3))               // !false == true
console.log(!(false))               // !false == true
console.log(!(4 > 3 && 10 < 12))    // !true && !true == false
console.log(!(4 > 3 && 10 > 12))    // !true && ! false == true
console.log(!(4 === '4'))           // !false == true
// There is no 'on' in both dragon and python
stringOne = 'dragon'
stringTwo = 'python'
console.log(stringOne.includes('on') && stringTwo.includes('on')) // true


// Use the Date object to do the following activities
const now = new Date()
// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth())
// What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay())
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now(), now.getTime())
