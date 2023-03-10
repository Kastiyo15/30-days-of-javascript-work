// Strings are texts, which are under single , double, back-tick quote. 
// To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote. Let's see some examples of strings:
let space = ' '           // an empty space string
let firstName = 'Max'
let lastName = 'Bedford'
let country = 'United Kingdom'
let city = 'Seaford'
let language = 'JavaScript'
let age = '22'
let quote = "The saying,'Seeing is Believing' is not correct in 2023."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2023.`




// STRING CONCATENATION
// connecting more than one string
let fullName = firstName + space + lastName

console.log(fullName)




// PARAGRAPHS
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

// console.log(paragraph)




// ESCAPE SEQUENCES
/* 
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (") 
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nAre you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t\t3\t\t5')
console.log('Day 2\t\t3\t\t5')
console.log('Day 3\t\t3\t\t5')
console.log('Day 4\t\t3\t\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')




// TEMPLATE LITERALS (TEMPLATE STRINGS)
// We can inject data as expressions inside an ES6 template string
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
console.log(`${a} is greater than ${b}: ${a > b}`) // returns '2 is greater than 3: false'

let personInfo = `I am ${fullName}. I am ${age} years old.` // ES6 - String Interpolation Method
console.log(personInfo)




// STRING METHODS
// everything in JavaScript is an object. Strings have many methods which allow us to work with them
console.log(firstName.length) // 3

// We can access each of the characters in a string using its index
let string = 'Bababooee'
let firstLetter = string[0]
let lastLetter = string[string.length - 1]
console.log(`Word: ${string}\nFirst Letter: ${firstLetter}\nLast Letter: ${lastLetter}`)

// toUpperCase(): changes string to uppercase
console.log(string.toUpperCase()) // BABABOOEE

// toLowerCase(): changes string to lowercase
console.log(string.toLowerCase()) // bababooee

// substring(): takes the starting index and stopping index
console.log(string.substring(0, 4)) // Baba
console.log(string.substring(4))    // booee (cuts out the first 4 characters)

// split(): splits a string into an array
string = '30 Days Of JavaScript'
console.log(string.split())     // changes to an array ->// Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

//trim(): removes trailing space at the beginning and at the end
string = '    30 Days of JavaScript    '
console.log(string)
console.log(string.trim(' '))

// includes(): takes a substring and returns a bool if it is found in the string. case-sensitive
string = '30 Days Of JavaScript'
console.log(string.includes('Days')) // true
console.log(string.includes('days')) // false

// replace(): takes an oldsubstring and a newsubstring
console.log(string.replace('JavaScript', 'Python'))

// charCodeAt(): takes index and it returns char code ASCII value of that index
string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3)) // D ASCII number is 68

// indexOf(): takes substring, if it exists, returns first position, if it doesn't return -1
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('days')) // -1

// lastIndexOf(): takes substring, returns first index of the strings last position, if not, return -1

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38

// concat(): takes many strings and joins them together
string = '30'
console.log(string.concat("Days", "Of", "JavaScript"))

// startsWith(): takes substring as argument, checks if string starts with it, returns true or false
string = 'Love is the best feeling in this world'
console.log(string.startsWith('Love'))  // true
console.log(string.startsWith('love'))  // false

// endsWith(): takes substring as argument, returns true if string ends with it
console.log(string.endsWith('world'))   // true
console.log(string.endsWith('Love'))    // false

// search(): takes substring as argument, returns index of the first match
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7 // (/ are called delimiters)(tells interpreter where regex beings and ends) ('g' and 'i' are modifiers) ('g' means global, 'i' means case insensitive)

// match(): takes substring, returns array if there is a match, if not, return null
// regex (regular expression)
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
let patternOne = /love/                 // without any flags
let patternTwo = /love/gi               // g-means search whole text, i-case insensitive
console.log(string.match(patternTwo))   // ["love", "love", "love"]

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(/\d+/g))      // ["2019", "30", "2020"]

// repeat(): takes a number argument, returns repeated version of string
string = 'love'
console.log(string.repeat(6)) // lovelovelovelovelovelove
