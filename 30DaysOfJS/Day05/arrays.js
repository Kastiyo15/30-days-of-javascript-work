// can store multiple values, each value can be access using their indexes
// collection of different data types
// array value can be modified

// Creating an EMPTY array //
// using square brackets([]) // This the most recommended way to create an empty list
// syntax
const arr = []
console.log(arr)


// An Array with Values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)


const arr2 = [
    'Max',
    250,
    true,
    { country: 'United Kingdom', city: 'Seaford' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr2)


// Creating an array using split //
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]


// Accessing the array itmes using index
const fruits2 = ['banana', 'orange', 'mango', 'lemon']

let firstFruit = fruits2[0] // we are accessing the first item using its index
console.log(firstFruit) // banana

let secondFruit = fruits2[1]
console.log(secondFruit) // orange


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
] // List of countries

console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]) //  -> Kenya


// MODIFYING ARRAY ELEMENT
// an array is mutable(modifiable). We can modify the contents of the array elements
const numbers2 = [1, 2, 3, 4, 5]
numbers2[0] = 10      // changing 1 at index 0 to 10
numbers2[1] = 20      // changing  2 at index 1 to 20

console.log(numbers2) // [10, 20, 3, 4, 5]


// MANIPULATING AN ARRAY
// Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// using Array()
manipulateArrayArray()

function manipulateArrayArray() {
    console.log("\nMANIPULATE ARRAY USING ARRAY()")
    const arr = Array() // create an empty array
    console.log(arr)

    const eightEmptyValues = Array(8) // creates 8 empty values
    console.log(eightEmptyValues) // [empty x 8]
}

// using {arrayName}.fill()
manipulateArrayFill()

function manipulateArrayFill() {
    console.log("\nMANIPULATE ARRAY USING FILL")
    const arr = Array() // empty array
    console.log(arr)

    const eightXvalues = Array(8).fill('X') // creates 8 element values filled with 'X'
    console.log(eightXvalues)

    const four4values = Array(4).fill(4) // creates 4 element values filled with 4
    console.log(four4values)
}

// using {arrayName}.concat()
manipulateArrayConcat()

function manipulateArrayConcat() {
    console.log("\nMANIPULATE ARRAY USING CONCAT")
    const fruits = ['banana', 'orange', 'apple']
    const vegetables = ['carrot', 'brocolli', 'lettuce']
    const fruitAndVeg = fruits.concat(vegetables)

    console.log(fruitAndVeg)
}

// using {arrayName}.includes()
checkingArrayIncludes()

function checkingArrayIncludes() {
    console.log("\nCHECK ARRAY USING INCLUDES")
    const numbers = [1, 2, 3, 4, 5]

    console.log(numbers.includes(3))    // true
    console.log(numbers.includes(8))    // false
}

// using Array.isArray({arrayName})
checkingArrayIsArray()

function checkingArrayIsArray() {
    console.log("\nCHECK ARRAY USING ISARRAY()")
    const numbers = [1, 2, 3, 4, 5]

    console.log(Array.isArray(numbers)) // true

    const number = 100

    console.log(Array.isArray(number))  // false

}

// convert array to string
convertArrayToString()

function convertArrayToString() {
    console.log("\nCONVERT ARRAY TO STRING")
    const numbers = [1, 2, 3, 4, 5]
    console.log(numbers.toString()) // 1,2,3,4,5
}

// join array elements together, returns a string
joinArrayElements()

function joinArrayElements() {
    console.log("\nJOIN ARRAY ELEMENTS")
    const numbers = [1, 2, 3, 4, 5]
    console.log(numbers.join())     // 1,2,3,4,5
    console.log(numbers.join(', ')) // 1, 2, 3, 4, 5 
    console.log(numbers.join('//')) // 1//2//3//4//5
}

// slice array elements, takes parameters: starting and ending position (doesn't include the end)
sliceArrayElements()

function sliceArrayElements() {
    console.log("\nSLICE ARRAY ELEMENTS")
    const numbers = [1, 2, 3, 4, 5]
    console.log(numbers.slice())     // copies all items
    console.log(numbers.slice(0))    // copies all items
    console.log(numbers.slice(1, 4)) // [2, 3, 4] // doesn't include ending position
}

// splice array elements, takes parameters: starting pos, no. of times to be removed, and number of times added
spliceArrayElements()

function spliceArrayElements() {
    console.log("\nSPLICE ARRAY ELEMENTS")
    const numbers = [1, 2, 3, 4, 5]
    numbers.splice()
    console.log(numbers)                // -> remove all items

    const numbers2 = [1, 2, 3, 4, 5, 6]
    numbers2.splice(3, 3, 7, 8, 9)
    console.log(numbers2.splice(3, 3, 7, 8, 9))  // -> [7, 8, 9] //it removes three item and replace three items // removes 4, 5, 6 and replaces 1, 2, 3
}

// add item to the end of an array, using the push() method
modifyArrayPush()

function modifyArrayPush() {
    console.log("\nMODIFY ARRAY USING PUSH()")
    let fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.push('apple')
    console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

    fruits.push('lime')
    console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']    
}

// remove item from the end of an array, using the pop() method
modifyArrayPop()

function modifyArrayPop() {
    console.log("\nMODIFY ARRAY USING POP()")
    let fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.pop()
    console.log(fruits)    // ['banana', 'orange', 'mango']
}

// remove item from the beginning of an array, using the shift() method
modifyArrayShift()

function modifyArrayShift() {
    console.log("\nMODIFY ARRAY USING SHIFT()")
    let fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.shift()
    console.log(fruits)    // ['orange', 'mango', 'lemon']
}

// add item to the beginning of an array, using the unshift() method
modifyArrayUnshift()

function modifyArrayUnshift() {
    console.log("\nMODIFY ARRAY USING UNSHIFT()")
    let fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.unshift('apple')
    console.log(fruits)    // ['apple', 'banana', 'orange', 'mango', 'lemon']
}

// reverse order of the array using the reverse() method
modifyArrayReverse()

function modifyArrayReverse() {
    console.log("\nMODIFY ARRAY USING REVERSE()")
    let fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.reverse()
    console.log(fruits)    // ['lemon', 'mango', 'orange', 'banana']
}

// arrange array elements in ascending order using the sort() method
modifyArraySort()

function modifyArraySort() {
    console.log("\nMODIFY ARRAY USING SORT()")
    let fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.sort()
    console.log(fruits)    // ['banana', 'lemon', 'mango', 'orange']
}

// arrays can store many data types, including itself
createArrayOfArrays()

function createArrayOfArrays() {
    console.log("\nCREATING AN ARRAY OF ARRAYS")
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']
    const fullStack = [frontEnd, backEnd]
    console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
    console.log(fullStack.length)  // 2
    console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
    console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
}