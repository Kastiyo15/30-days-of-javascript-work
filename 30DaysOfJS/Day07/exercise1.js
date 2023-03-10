// Declare a function fullName and it print out your full name.
function fullName() {
    let string = '';
    let firstName = 'Max';
    let lastName = 'Bedford';
    let space = ' ';

    string = firstName.concat(space, lastName);
    console.log(`Full name: ${string}`);
}

fullName();


// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNameWithParameters(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(`Full name: ${fullNameWithParameters('Max', 'Bedford')}`)


// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(`Sum of numbers: ${addNumbers(15, 50)}`)


// An area of a rectangle is calculated as follows: area = length x width.Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}

console.log(`Area of rectangle: ${areaOfRectangle(15, 40)}`)


// A perimeter of a rectangle is calculated as follows: perimeter = 2x(length + width).Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(`Perimeter of rectangle: ${perimeterOfRectangle(15, 40)}`)


// A volume of a rectangular prism is calculated as follows: volume = length x width x height.Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return (length * width * height);
}

console.log(`Volume of rectangular prism: ${volumeOfRectPrism(15, 40, 10)}`)


// Area of a circle is calculated as follows: area = π x r x r.Write a function which calculates areaOfCircle
const areaOfCircle = r => (Math.PI * Math.pow(r, 2)).toFixed(2);

console.log(`Area of circle: ${areaOfCircle(7.4)}`)


// Circumference of a circle is calculated as follows: circumference = 2πr.Write a function which calculates circumOfCircle
const circumOfCircle = r => (Math.PI * r * 2).toFixed(2);

console.log(`Circumference of circle: ${circumOfCircle(10)}`);


// Density of a substance is calculated as follows: density = mass / volume.Write a function which calculates density.
function density(mass, volume) {
    return (mass / volume).toFixed(2);
}

console.log(`Density: ${density(7, 15)}`);


// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return (distance / time).toFixed(2);
}

console.log(`Speed: ${speed(100, 9.81)} m/s/s`);


// Weight of a substance is calculated as follows: weight = mass x gravity.Write a function which calculates weight.
function weight(mass, gravity) {
    return (mass * gravity);
}

console.log(`Weight: ${weight(100, 9.81)} N`);


// Temperature in oC can be converted to oF using this formula: oF = (oC x 9 / 5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = c => ((c * 9) / 5) + 32;

console.log(`Convert Celcius to Fahrenheit: ${convertCelsiusToFahrenheit(21)} F`);


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.Write a function which calculates bmi.BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
//     Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBMI(weight, height) {
    let result = '';
    let group = '';
    let BMI = 0;
    BMI = weight / (height * height);

    if (BMI < 18.5) {
        group = 'Underweight';
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        group = 'Normal';
    }
    else if (BMI >= 25 && BMI < 29.9) {
        group = 'Overweight';
    }
    else if (BMI > 30) {
        group = 'Obese';
    }

    result += 'BMI: ' + BMI.toFixed(1) + ' ' + `(${group})`;

    return result;

}
console.log(`${calculateBMI(64, 1.78)}`);


// Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.

function checkSeason(string) {
    let result = '';
    let month = '';

    month += string.charAt(0).toUpperCase() + string.slice(1);

    let autumn = ['September', 'October', 'November'];
    let winter = ['December', 'January', 'February'];
    let spring = ['March', 'April', 'May'];
    let summer = ['June', 'July', 'August'];

    if (autumn.includes(month)) {
        result = 'Autumn';
    }
    else if (winter.includes(month)) {
        result = 'Winter';
    }
    else if (spring.includes(month)) {
        result = 'Spring';
    }
    else if (summer.includes(month)) {
        result = 'Summer';
    }

    return result;
}

console.log(`Season: ${checkSeason('february')}`);


//     Math.max returns its largest argument.Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//         console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(...args) { // can use any input name as long as it is preceded by ...
    let max = 0;
    let curNum = 0;

    for (let i = 0; i < args.length; i++) {
        curNum = args[i];

        if (curNum > max) {
            max = curNum;
        }
    }

    return max;

}

console.log(`Max number is: ${findMax(4, 56, 1, 55, 88, 34, 741, 43, 2, 16, 2, 77, 32, 63)}`)