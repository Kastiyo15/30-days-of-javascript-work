
// if statement //
// syntax
if (condition) {
    //this part of code runs for truthy condition
}

let isRaining = true
if (isRaining) {
    console.log('Remember to take your rain coat.')
}


// if else statement //
// syntax
if (condition) {
    // this part of code runs for truthy condition
} else {
    // this part of code runs for false condition
}

let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}
//  -3 is a negative number


// if else if else statement //
// syntax
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    //  code
}

// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
    console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
    console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
    console.log('Go out freely.')
} else {
    console.log('No need for rain coat.')
}


// switch //
// syntax
switch (caseValue) {
    case 1:
        // code
        break
    case 2:
        // code
        break
    case 3:
        // code
        break
    default:
    // code
}

num = prompt('Enter number');
switch (true) {
    case num > 0:
        console.log('Number is positive');
        break;
    case num == 0:
        console.log('Numbers is zero');
        break;
    case num < 0:
        console.log('Number is negative');
        break;
    default:
        console.log('Entered value was not a number');
}


// Ternary operators
isRaining = true
isRaining
    ? console.log('You need a rain coat.') // if true
    : console.log('No need for a rain coat.') // if false
