// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}



// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for (const element of arr) {
        console.log(element);
    }
}
printArray(['dog', 'man', 15, true, 'cat', 99]);



// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
    const now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();

    return `${date}/${month}/${year} ${hour}:${minute}`;
}
console.log(showDateTime());



// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(num1, num2) {
    let x = 0, y = 0;
    x = num2, y = num1;
    return `x = ${x}, y = ${y}`
}
console.log(swapValues(18, 4));



// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(arr) {
    let revArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    return revArr;
}
console.log(reverseArray([8, 7, 6, 5, 4, 3, 2, 1]));



// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitaliseArray(arr) {
    let capArr = [];

    for (let i = 0; i < arr.length; i++) {
        capArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }

    return capArr;
}
console.log(capitaliseArray(['dog', 'cat', 'man', 'woman']));



// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(itemToAdd) {
    let item = itemToAdd;
    let arr = ['cat', 'woman', 'man', 'rabbit', 'wolf', 'fox'];

    arr.push(item);

    return arr;
}
console.log(addItem('dog'));



// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(itemToRemove) {
    let item = itemToRemove;
    let index = 0;
    let arr = ['cat', 'woman', 'man', 'dog', 'rabbit', 'wolf', 'fox'];

    index = arr.indexOf(item);
    arr.splice(index, 1); // (index to remove, how many elements afterwards)

    return arr;
}
console.log(removeItem('dog'));



// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(...arg) {
    let sum = 0;
    for (const numbers of arg) {
        sum += numbers;
    }
    return sum;
}
console.log(sumOfNumbers(7, 4, 2, 6, 2))



// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(...arg) {
    let sumOdds = 0;
    for (const num of arg) {
        if (num % 2 != 0) {
            sumOdds += num;
        }
    }
    return sumOdds;
}
console.log(sumOfOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(...arg) {
    let sumEven = 0;
    for (const num of arg) {
        if (num % 2 == 0) {
            sumEven += num;
        }
    }
    return sumEven;
}
console.log(sumOfEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(num) {
    let numOfOdds = 0;
    let numOfEvens = 0;

    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            numOfEvens++;
        } else {
            numOfOdds++;
        }
    }
    return `The number of odds are ${numOfOdds}.\nThe number of evens are ${numOfEvens}.`
}
console.log(evensAndOdds(100));



// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sum(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }

    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))



// Write a function which generates a randomUserIp.
function randomUserIP() {
    // four numbers from 0-255
    let result = 'IP Address: '
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(Math.round(Math.random() * 255));
    }

    return result + `${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`
}
console.log(randomUserIP());



// Write a function which generates a randomMacAddress
function randomMacAddress() {
    // 12 numbers, seperated by colon or dash, each one a hexadecimal digits
    let result = 'Mac Address: ';
    let address = '';
    let hexDigits = '0123456789ABCDEF'

    for (let i = 0; i < 12; i++) {
        address += (hexDigits.charAt(Math.floor(Math.random() * 16)));

        if (i > 0 && i % 2 != 0 && i < 11) {
            address += '-';
        }
    }

    return result + address;
}
console.log(randomMacAddress());



// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator() {
    let result = 'Hex Code: #';
    let genNum = '';
    let hexChars = '0123456789ABCEDF'
    let length = 6;

    for (let i = 0; i < length; i++){
        genNum += hexChars.charAt(Math.floor(Math.random() * 16));
    }

    return result + genNum;
}
console.log(randomHexaNumberGenerator());



// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator() {
    let result = 'User Id: ';
    let id = '';
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let length = 7;

    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result + id;
}
console.log(userIdGenerator());

