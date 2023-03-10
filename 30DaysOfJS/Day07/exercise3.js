// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/*
userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf'

userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr'
*/

function userIdGeneratedByUser(length, amount) {
    let len = length; // how long the ID is
    let num = amount; // how many IDs are generated
    let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let arr = [];
    let result = 'User IDs:\n';

    // loop for amount of IDs to generate
    for (let i = 0; i < num; i++) {

        let string = `${i + 1}:\t`;

        // loop for how long the ID is
        for (let j = 0; j < len; j++) {
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        arr.push(string);
    }

    result += arr.join('\n'); // join all elements in the array to a string
    return result;
}
console.log(userIdGeneratedByUser(12, 10));



// Write a function name rgbColorGenerator and it generates rgb colors.
/*
rgbColorGenerator()
rgb(125,244,255)
*/
function rgbColourGenerator() {
    let r = 0, g = 0, b = 0;
    let result = 'rgb';

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    return result + `(${r},${g},${b})`;
}
console.log(rgbColourGenerator());



// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColours(number) {
    let num = number; // number of colours to generate
    let arr = [];
    let characters = '0123456789ABCDEFabcdef'

    for (let i = 0; i < num; i++) {
        let string = '#';
        for (let j = 0; j < 6; j++) {
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        arr.push(string);
    }

    return arr;
}
console.log(arrayOfHexaColours(10))



// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(number) {
    let num = number; // number of colours to generate
    let arr = [];

    for (let i = 0; i < num; i++) {

        let string = '';

        let r = 0, g = 0, b = 0;
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        string += `rgb(${r},${g},${b})`

        arr.push(string);
    }

    return arr;
}
console.log(arrayOfRgbColors(10))



// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(value) {
    let digits = '0123456789ABCDEF';

    let hexVal = '';
    hexVal = value;

    let arr = []; // store each value in an array

    // Add each converted value to an array
    for (let i = 0; i < hexVal.length; i++) {
        let value = 0;

        value = digits.indexOf(hexVal.charAt(i).toUpperCase()); // convert all values to 0-15

        // multiply every i = even number, and add every i = odd number

        if (i % 2 == 0) {
            value *= 16;
        }

        arr.push(value);
    }

    let r = 0, g = 0, b = 0;

    r += arr[0] + arr[1];
    g += arr[2] + arr[3];
    b += arr[4] + arr[5];

    let result = `Hexcode: #${value}`;

    return `${result}\nRGB: rgb(${r},${g},${b})`;
}
console.log(convertHexaToRgb('4F8C99'));



// Write a function convertRgbToHexa which converts rgb to hexa color and it returns a hexa color.
function convertRgbToHexa(valR, valG, valB) {
    let digits = '0123456789ABCDEF';
    let result = '#';

    for (const val of arguments) {
        let value = 0, hexOne = 0, hexTwo = 0;

        value = val / 16;
        hexOne = Math.floor(value);
        hexTwo = (value % hexOne) * 16;

        result += digits.charAt(hexOne);
        result += digits.charAt(hexTwo);
    }

    return result;

}
console.log(convertRgbToHexa(79, 140, 153));



// Write a function generateColors which can generate any number of hexa or rgb colors.
/*
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
function generateColors(type, amount) {
    // convert all letters to one case for validity checking
    let colType = '';
    for (const letters of type) {
        colType += letters.toLowerCase();
    }

    let arr = [];

    if (colType == 'hexa') {
        arr = arrayOfHexaColours(amount);
    }
    else if (colType == 'rgb') {
        arr = arrayOfRgbColors(amount);
    }
    else {
        return 'Please enter type: "hexa" or "rgb"';
    }

    return arr;
}
console.log(generateColors('rgb', 10));



// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    let result = [];
    result = arr;

    // Fisher–Yates unbiased shuffling algorithm
    let m = result.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = result[m];
        result[m] = result[i];
        result[i] = t;
    }

    return result;

}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
    let result = 1;

    while (num) {
        result *= num--;
    }

    return result;
}
console.log(`Factorial: ${factorial(5)}`);


// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(param) {
    if (param == null || param == "") {
        return true;
    }
    return false;
}

console.log(`Parameters empty: ${isEmpty()}`);



// Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...numbers) {
    let result = 0;

    for (const num of numbers) {
        result += num;
    }
    return result;
}
console.log(`Sum of Arguments: ${sum(51, 29, 523, 344, 5, 56, 57, 78, 932, 310)}`);



// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    // check if array elements are numbers
    for (const num of arr) {
        if (typeof num !== 'number') {
            return 'Please enter an array of numbers'
        }
    }

    // add sum
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(`Sum of Array Items: ${sumOfArrayItems([1, 2, 7, 2, 3, 6, 4])}`);



// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    // check if array elements are numbers
    for (const num of arr) {
        if (typeof num !== 'number') {
            return 'Please enter an array of numbers'
        }
    }

    let avg = 0;
    for (const num of arr) {
        avg += num / arr.length;
    }

    return avg.toFixed(2);
}
console.log(`Average of Array Nums: ${average([141, 82, 39, 4, 51, 6, 78, 87, 97, 10, 77, 12, 88])}`);



// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
/*
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
  */
function modifyArray(arr) {
    // check if valid
    if (arr.length < 5) {
        return 'Not Found';
    }

    // change 5th element to uppercase
    arr[4] = arr[4].toUpperCase();


    return arr;
}
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']))



// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            counter++;
        }
    }

    if (counter > 2) {
        return false;
    }
    else {
        return true;
    }
}
console.log(`Prime Number Check: ${isPrime(17)}`);



// Write a functions which checks if all items are unique in the array.
function uniqueArray(arr) {
    // loop through the array
    // set a new array to all the elements bar the current element
    // then use include() method to see if the current element is in there

    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        let currentElement = arr[i];
        let counter = 0;

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] === currentElement) {
                counter++;
            }

            if (arr[j] !== currentElement) {
                tempArr.push(arr[j]);
            }

            if (counter > 1) {
                return false;
            }
        }
    }


    return true;
}
console.log(`Is Unique Array: ${uniqueArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Tomato', 'Carrot'])}`);



// Write a function which checks if all the items of the array are the same data type.
function sameDataType(arr) {
    // set a variable to the first elmenet in array, then compare that to each other element
    let dataType = typeof (arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== dataType) {
            return false;
        }
    }

    return true;
}
console.log(`Same Data Type: ${sameDataType(['Avocado', 'Tomato', 'Potato', 'Mango', 'Car', 'Carrot'])}`)



// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(name) {
    // try if the function returns an error or not
    try {
        Function('var ' + name);
    } catch (e) {
        return false;
    }

    return true;
}
console.log(`${isValidVariable('dataType')}`);



// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers() {
    let result = [];

    for (let i = 0; i < 7; i++) {
        let randNum = Math.round(Math.random() * 10);

        while (result.includes(randNum)) {
            randNum = Math.round(Math.random() * 10);
        }

        result.push(randNum);
    }

    return result;
}
console.log(`Seven Random Numbers: ${sevenRandomNumbers()}`)



// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}
console.log(reverseCountries(['Brazil', 'Columbia', 'Argentina', 'Peru', 'Chile']));


// Generate hex colour using one line of code
function generateHexColour() {
    let result = 0;
    result = Math.floor(Math.random() * 0xffffff).toString(16);

    return `#${result}`;
}
console.log(`Random Hex Colour: ${generateHexColour()}`);

