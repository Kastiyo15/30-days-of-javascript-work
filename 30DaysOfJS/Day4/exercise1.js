// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// checkDrivingAge()    // <------ ANSWER -------

function checkDrivingAge() {
    let age = Number(prompt("What is your age?"))
    console.log(`Enter your age: ${age}`)

    if (age >= 18) {
        console.log(`You are old enough to drive.`)
    }
    else {
        let difference = Number(18 - age)
        console.log(`You are left with ${difference} years to drive.`)
    }
}


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

// compareTwoAges()     // <------ ANSWER -------

function compareTwoAges() {
    let myAge = Number(prompt("Enter my age:"))
    let yourAge = Number(prompt("Enter your age:"))
    console.log(`My Age: ${myAge}\nYour Age: ${yourAge}`)

    let difference = Math.abs(myAge - yourAge)

    if (myAge > yourAge) {
        console.log(`I am ${difference} years older than you.`)
    }
    else {
        console.log(`You are ${difference} years older than me.`)
    }
}


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

// - using if else
// - ternary operator.
//   let a = 4
//   let b = 3

//   4 is greater than 3

// compareTwoValues()       // <------ ANSWER -------

function compareTwoValues() {
    let type = prompt("(1) if else\n(2) ternary operator")

    let a = Number(prompt("a:"))
    let b = Number(prompt("b:"))

    switch (type) {
        case ('1'):
            if (a > b) {
                console.log("a is greater than b")
            }
            else {
                console.log("a is less than b")
            }
            break
        case ('2'):
            a > b ? console.log("a is greater than b") : console.log("a is less than b")
            break
        default:
            break
    }
}


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

// checkOddOrEven()         // <------ ANSWER -------

function checkOddOrEven() {
    let num = Number(prompt("Enter a number:"))

    num % 2 == 0
        ? console.log(`${num} is an even number`)
        : console.log(`${num} is an odd number`)
}
