// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

// Print the string on the browser console using console.log()
console.log(`${challenge}`)

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(0, 2))

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))       // true

// Split the string into an array using split() method
console.log(challenge.split())

// Split the string 30 Days Of JavaScript at the space using split() method
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log(challenge.split(' '))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))               // S

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11))           // 74

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))             // 4

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))         // 14

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
challenge = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.indexOf('because'))       // 31

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.lastIndexOf('because'))   // 47

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.search('because'))        // 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
challenge = ' 30 Days Of JavaScript '
console.log(challenge.trim(' '))

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
challenge = '30 Days Of JavaScript'
console.log(challenge.startsWith('30'))         // true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))   // true

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/gi))             // 3

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
challenge = '30 Days of'
console.log(challenge.concat(' ', 'JavaScript'))

// Use repeat() method to print 30 Days Of JavaScript 2 times
challenge = '30 Days Of JavaScript'
console.log(challenge.repeat(2))