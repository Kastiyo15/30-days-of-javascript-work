// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("1. 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`2. "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let x = '10'
console.log(`3. is ${typeof x} == ${typeof 10}: ${typeof x == typeof 10}`)
console.log(`   is ${typeof parseInt(x)} == ${typeof 10}: ${typeof parseInt(x) == typeof 10}`)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
x = '9.8'
console.log(`4. ${parseFloat(x) == 10}`)
console.log(`   ${Math.ceil(parseFloat(x))} is equal to ${10}: ${Math.ceil(parseFloat(x)) == 10}`)

// Check if 'on' is found in both python and jargon
let a = 'Python'
let b = 'Jargon'
console.log(`5. is "on" found in both ${a} and ${b}? : ${a.match(/on/gi)} and ${b.match(/on/gi)}`)

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let string = 'I hope this course is not full of jargon.'
console.log(`6. ${string.match(/jargon/g)}`)

// Generate a random number between 0 and 100 inclusively.
let minNum = 0
let maxNum = 100
let randNum = Math.random() * maxNum
let finalNum = parseInt(randNum)
console.log(`7. Random Number: ${finalNum}`)

// Generate a random number between 50 and 100 inclusively.
minNum = 50
maxNum = 50
randNum = Math.random() * maxNum
finalNum = parseInt(randNum) + minNum
console.log(`8. Random Number: ${finalNum}`)

// Generate a random number between 0 and 255 inclusively.
minNum = 0
maxNum = 255
randNum = Math.random() * maxNum
finalNum = parseInt(randNum)
console.log(`8. Random Number: ${finalNum}`)

// Access the 'JavaScript' string characters using a random number.
string = 'JavaScript'
minNum = 0
maxNum = string.length - 1
randNum = Math.random() * maxNum
finalNum = parseInt(randNum)
console.log(`9. Random Letter in "JavaScript": ${string[finalNum]}`)

// Use console.log() and escape characters to print the following pattern.
/* 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 
*/
string = '1 '
console.log('10. \n1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
string = 'You cannot end a sentence with because because because is a conjunction.'
let stringSliced = string.substr(string.search(/because/), 24)
console.log(`11. ${stringSliced}`)