// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
function triangleArea() {
    let base = prompt("Triangle Base", "")
    let height = prompt("Triangle Height", "")
    let area = calculateTriangleArea(base, height)

    console.log(`Base = ${base} m\nHeight = ${height} m\nArea of the triangle: ${area} m2`)
}

function calculateTriangleArea(a, b) {
    return a * b * 0.5
}


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
function trianglePerimeter() {
    let sideA = Number(prompt("Side A:", ""))
    let sideB = Number(prompt("Side B:", ""))
    let sideC = Number(prompt("Side C:", ""))

    let perimeter = calculateTrianglePerimeter(sideA, sideB, sideC)

    console.log(`Side A = ${sideA} m\nSide B = ${sideB} m\nSide C = ${sideC} m\nPerimeter of the triangle: ${perimeter} m`)
}

function calculateTrianglePerimeter(a, b, c) {
    return Number(a + b + c)
}


// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
function rectangleAreaAndPerimeter() {
    let length = Number(prompt("Length: ", ""))
    let width = Number(prompt("Width: ", ""))

    let area = calculateRectangleArea(length, width)
    let perimeter = calculateRectanglePerimeter(length, width)

    console.log(`Area of Rectangle: ${area}`)
    console.log(`Perimeter of Rectangle: ${perimeter}`)

}

function calculateRectangleArea(a, b) {
    return a * b
}

function calculateRectanglePerimeter(a, b) {
    return a + b
}


// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function circleAreaAndCircumference() {
    let radius = Number(prompt("radius: ", ""))

    const PI = 3.14
    let area = calculateCircleArea(radius, PI)
    let circumference = calculateCircleCircumference(radius, PI)

    console.log(`Area: ${area}\nCircumference: ${circumference}`)

}

function calculateCircleArea(a, pi) {
    let num = pi * Math.pow(a, 2)
    return (Math.round(num * 100) / 100).toFixed(2);
}

function calculateCircleCircumference(a, pi) {
    let num = (pi * (a * 2))
    return (Math.round(num * 100) / 100).toFixed(2);
}


// Function which asks for calculations
// askForShapeCalculations()        // <-- ANSWER --

function askForShapeCalculations() {
    // Ask user to select a function
    let calculationInput = Number(prompt("Choose a function: \n • (1) Triangle Area \n • (2) Triangle Perimeter \n • (3) Rectangle Area/Perimeter \n • (4) Circle Area/Circumference"))

    switch (calculationInput) {
        case (1):
            triangleArea()
            break

        case (2):
            trianglePerimeter()
            break

        case (3):
            rectangleAreaAndPerimeter()
            break

        case (4):
            circleAreaAndCircumference()
            break

        default:
            alert("ERROR: Incorrect Input")
    }
}


// Calculate the slope, x-intercept and y-intercept of y = 2x -2
console.log(`equation: y = 2x - 2`)

// x-intercept
let x1 = Number(0)
let y1 = Number((2 * x1) - 2)
console.log(`\tx-intercept: (${x1}, ${y1})`)

// y-intercept
let y2 = Number(0)
let x2 = Number(`${(y2 + 2) * 0.5}`)
console.log(`\ty-intercept: (${x2}, ${y2})`)

// slope
let slope1 = Number((y2 - y1) / (x2 - x1))
console.log(`\tslope: ${slope1}`)



// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
x1 = 2, y1 = 2
x2 = 6, y2 = 10

let slope2 = Number((y2 - y1) / (x2 - x1))
console.log(`\tslope: ${slope2}`)


// Compare the slope of above two questions.
console.log(slope1 == slope2) // true


// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
console.log("equation: y = x^2 + 6x + 9")
let a = 1, b = 6, c = 9
let x = quadraticEquation(a, b, c)
let y = (Math.pow(x, 2) + (6 * x) + 9)
console.log(`When x: ${x}\ty: ${y}`)

function quadraticEquation(a, b, c) {
    // positive values
    let posVal = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)

    // negative values
    let negVal = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)

    console.log(`x: ${posVal} or x: ${negVal}`)

    return posVal
}


// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// calculateWeeklyEarnings()        // <-- ANSWER --

function calculateWeeklyEarnings() {
    let hours = Number(prompt("Enter hours worked: "))
    console.log(`Hours: ${hours}`)

    let hourlyRate = Number(prompt("Enter hourly rate: "))
    console.log(`Hourly Rate: ${hourlyRate}`)

    let weeklyEarning = (hours * hourlyRate)
    let num = (Math.round(weeklyEarning * 100) / 100).toFixed(2);
    console.log(`Weekly Earning: £ ${num}`)
}



// If the length of your name is greater than 7 say, your name is long else say your name is short.

// checkNameLength()            // <-- ANSWER --

function checkNameLength() {
    let firstName = prompt("What is your first name?: ")
    let firstNameLength = firstName.length - 1

    if (firstNameLength > 7) {
        console.log("Your name is long.")
    }
    else {
        console.log("Your name is short.")
    }
}


// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

// compareFirstAndSecondName()      // <-- ANSWER --

function compareFirstAndSecondName() {
    let firstNameString = 'first name'
    let firstName = prompt("What is your first name?: ")
    let firstNameLength = firstName.length - 1

    let surnameString = 'surname'
    let surname = prompt("What is your surname?: ")
    let surnameLength = surname.length - 1

    if (firstNameLength > surnameLength) {
        console.log(`Your ${firstNameString}, ${firstName} is longer than your ${surnameString}, ${surname}.`)
    }
    else if (firstNameLength < surnameLength) {
        console.log(`Your ${surnameString}, ${surname} is longer than your ${firstNameString}, ${firstName}.`)
    }
    else if (firstNameLength == surnameLength) {
        console.log(`Your first name, ${firstName} is the same as your surname, ${surname}.`)
    }
}


// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

// compareAges()            // <-- ANSWER --

function compareAges() {
    let myAge = Number(prompt("What is my age?"))
    let yourAge = Number(prompt("What is your age?"))
    let difference = Math.abs(myAge - yourAge)

    if (myAge > yourAge) {
        console.log(`I am ${difference} years older than you.`)
    }
    else if (myAge < yourAge) {
        console.log(`I am ${difference} years younger than you.`)
    }
}


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// checkDrivingAge()        // <-- ANSWER --

function checkDrivingAge() {
    const legalAge = 18
    const now = new Date()
    let birthYear = Number(prompt("Enter Birth Year:"))
    let currentYear = now.getFullYear()
    let age = (currentYear - birthYear)
    let difference = (legalAge - age)

    if (age >= legalAge) {
        console.log(`You are ${age}. You are old enough to drive.`)
    }
    else {
        console.log(`You are ${age}. You will be allowed to drive in ${difference} years.`)
    }
}


// Write a script that prompt the user to enter number of years. Calculate the number of seconds the person has lived. Assume some one lives just one hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.

//checkAmountOfSecondsLived()   // <-- ANSWER --

function checkAmountOfSecondsLived() {
    const YEARLYDAYS = 365
    const HOURSINDAY = 24
    const SECONDSINHOUR = 3600
    let age = prompt("What is your age?")
    let secondsLived = SECONDSINHOUR * HOURSINDAY * YEARLYDAYS * age

    console.log(`You have lived ${secondsLived} seconds.`)
}


// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// readableTimeFormat()     // <-- ANSWER --

function readableTimeFormat() {
    const TIME = new Date()
    let year = TIME.getFullYear()
    let month = TIME.getMonth() + 1
    let date = TIME.getDate()
    let hour = TIME.getHours()
    let minute = TIME.getMinutes()

    let type = Number(prompt("Choose time format:\n • (1) YYYY-MM-DD HH:mm\n • (2) DD-MM-YYYY HH:mm\n • (3) DD/MM/YYYY HH:mm"))

    switch (type) {
        case (1):
            console.log(`Date: ${year}-${month}-${date} ${hour}:${minute}`)
            break
        case (2):
            console.log(`Date: ${date}-${month}-${year} ${hour}:${minute}`)
            break
        case (3):
            console.log(`Date: ${date}/${month}/${year} ${hour}:${minute}`)
            break
        default:
            break
    }
}