// use 'typeof' to check the type of a variable
console.log(typeof 'Max') // string

console.log(typeof true, typeof 15, typeof null, typeof undefined) // bool, number, object, undefined


// Primitive Data Types (not-modifiable)
// Values can be compared
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py) // false

// Non-Primitive Data Types (modifiable)
// Can be modified by creating an array
// Values cannot be compared
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)

let userOne = {
    name: 'Max',
    role: 'Gamer',
    country: 'UK'
}

let userTwo = {
    name: 'Max',
    role: 'Gamer',
    country: 'UK'
}

console.log(userOne == userTwo) // false






// CHECKING DATA TYPES
// we use typeof method

console.log(typeof 'Max')       // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object


// CHANGING DATA TYPES (CASTING)
// casting: convert one data type to another
// we use: parseInt(), parseFloat(), Number(), +sign, str()
// when we do arithmetic string numbers should be converted to int or float, otherwise you get an error

// string to int
let num, numInt

num = '10'
numInt = parseInt(num)
console.log(numInt)     // 10

num = '15'
numInt = Number(num)
console.log(numInt)     // 15

num = '20'
numInt = +num
console.log(numInt)     // 20

// string to float
let numFloat
num = '9.81'
numFloat = parseFloat(num)
console.log(numFloat)   // 9.81

num = '19.81'
numFloat = Number(num)
console.log(numFloat)   // 19.81

num = '119.81'
numFloat = +num
console.log(numFloat)   // 119.81

// float to int
num = '15.92'
numInt = parseInt(num)
console.log(numInt)     // 15