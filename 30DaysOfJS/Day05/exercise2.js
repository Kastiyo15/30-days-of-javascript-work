// // ## TASK 1 ##
// // Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

import { countries } from "./countries.js"
import { webTechs } from "./web_tech.js"

// ## TASK 2 ##
// // First remove all the punctuations and change the string to array and count the number of words in the array:
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words) // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(words.length) // 13


// ## TASK 3 ##
// // In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     // add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart)

//     // add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

//     // remove 'Honey' if you are allergic to honey
let removedIndex = shoppingCart.indexOf('Honey')
shoppingCart.splice(removedIndex, 1)
console.log(shoppingCart)

//     // modify Tea to 'Green Tea'
let updateIndex = shoppingCart.indexOf('Tea')
shoppingCart[updateIndex] = 'Green Tea'
console.log(shoppingCart)


// ## TASK 4 ##
// // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let country = 'Ethiopia'
if (countries.includes(country)) {
    console.log(`Contains ${country}`)
}
else {
    console.log(`Does not contain ${country}.`)
}


// ## TASK 5 ##
// // In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let webTech = 'Sass'
if (webTechs.includes(webTech)) {
    console.log(`${webTech} is a CSS preprocess`)
}
else {
    console.log(`Does not contain ${webTech}.`)
    webTechs.push(webTech)
    console.log(`Added ${webTech} to array: ${webTechs}.`)
}


// ## TASK 6 ##
// // Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack) // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]