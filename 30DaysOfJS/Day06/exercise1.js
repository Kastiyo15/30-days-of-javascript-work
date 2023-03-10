// Iterate 0 to 10 using for loop, do the same using while and do while loop
function zeroToTen() {
    console.log("For Loop");
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }

    console.log("While Loop");
    let j = 0;
    while (j <= 10) {
        console.log(j);
        j++;
    }

    console.log("Do While Loop");
    let k = 0;
    do {
        console.log(k);
        k++;
    } while (k <= 10)
}


// Iterate 0 to n using for loop
function zeroToN() {
    let n = prompt("What is n?");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}


// Write a loop that makes the following pattern using console.log():
function hashtagPyramids() {
    let n = prompt("Size of pyramid?");

    drawPyramid(n);
}

function drawPyramid(n) {
    let str = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            str += '#';
        }
        str += `\n`;
    }

    console.log(str);
}
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######


// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

function timesTables() {
    let n = 0;

    while (n <= 10) {
        console.log(`${n} x ${n} = ${n * n}`);
        n++;
    }
}


// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

function powerTable() {
    console.log('i' + '\t\t' + 'i^2' + '\t\t' + 'i^3');

    let n = 0;

    while (n <= 10) {
        console.log(`${n}` + '\t\t' + `${n * n}` + '\t\t' + `${n * n * n}\n`)
        n++;
    }
}


// Use for loop to iterate from 0 to 100 and print only even numbers
function printEvenNumbers() {
    let n = 100;
    const arr = [];

    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
        else {
            continue;
        }
    }

    let string = arr.join(', ');
    console.log(string);
}


// Use for loop to iterate from 0 to 100 and print only odd numbers
function printOddNumbers() {
    let n = 100;
    const arr = [];

    for (let i = 0; i <= n; i++) {
        if (!(i % 2 == 0)) {
            arr.push(i);
        }
        else {
            continue;
        }
    }

    let string = arr.join(', ');
    console.log(string);
}


// Use for loop to iterate from 0 to 100 and print only prime numbers
function printPrimeNumbers() {
    let n = 100;
    const arr = [];

    // loop from 0 to 100
    for (let i = 0; i <= n; i++) {
        let counter = 0;

        // check to see if any numbers before i are factors of it
        for (let j = 0; j <= i; j++) {
            if (i % j == 0 && counter < 3) {
                counter++;
            }
            else {
                continue;
            }
        }

        if (counter == 2) {
            arr.push(i);
        }
    }

    let string = arr.join(', ');
    console.log(string);
}


// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
function sumAllNumbers() {
    let n = 100;
    let sum = 0;

    console.log(`The sum of all numbers from 0 to 100 is:`);

    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    console.log(sum);
}


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
function sumAllOddsAndEvens() {
    let n = 100;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            evenSum += i;
        }
        else {
            oddSum += i;
        }
    }

    console.log(`The sum of all evens is ${evenSum}.\nThe sum of all odds is ${oddSum}.`);
}


// Develop a small script which generate array of 5 random numbers
function randomNumberPassword() {
    const arr = [];
    let n = 5;

    for (let i = 0; i < n; i++) {
        arr.push(Math.ceil(Math.random() * 10));
    }

    console.log(arr);
}


// Develop a small script which generate array of 5 random numbers and the numbers must be unique
function randomUniqueNumberPassword() {
    const arr = [];
    let n = 5;
    let num = 0;

    for (let i = 0; i < n; i++) {
        do {
            num = Math.ceil(Math.random() * 5)
        } while (arr.includes(num))

        arr.push(num);
    }

    console.log(arr);
}


// Develop a small script which generate a six characters random id:
// 5j2khz

function randomPasswordGenerator() {
    const arr = [];
    let length = 8;

    for (let i = 0; i < length; i++)
    {
        let selector = Math.ceil(Math.random() * 2);

        // add number
        if (selector == 1)
        {
            let num = Math.ceil(Math.random() * 9);
            arr.push(num);
        }
        // add letter
        else if (selector == 2)
        {
            let ascii = Math.ceil(Math.random() * 26);
            let alpha = String.fromCharCode(96 + ascii); // 96 is 1 before 'a', but calculation uses 'ceil'
            arr.push(alpha);
        }
    }

    console.log(arr);
    console.log(arr.join(''));
}
