// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
function generateRandomCharacters(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    let counter = 0;

    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter++;
    }

    return result;
}

console.log(`Random id: ${generateRandomCharacters(10)}`);


// Write a script which generates a random hexadecimal number.
// '#ee33df'
function generateRandomHexNumber() {
    let result = '#';
    let characters = '0123456789ABCEDFabcedf';
    let charactersLength = characters.length;
    let counter = 0;

    while (counter < 6) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter++;
    }

    return result;
}

console.log(`Random Hexcode: ${generateRandomHexNumber()}`);


// Write a script which generates a random rgb color number.
// rgb(240,180,80)
function generateRandomRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let result = `rgb(${r}, ${g}, ${b})`;

    return (result)
}

console.log(`Random RGB Colour: ${generateRandomRGB()}`);


// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
import { countries } from "../Day5/countries.js";

function copyCountriesArray() {
    const arr = [];

    for (const country of countries) {
        arr.push(country.toUpperCase());
    }

    return arr;
}

console.log("Capitalised countries: ", copyCountriesArray())


// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
function getCountryLengths() {
    const arr = [];

    for (const country of countries) {
        arr.push(country.length);
    }

    return arr;
}

console.log(`Country Lengths: `, getCountryLengths());


// Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
function getArrayOfCountryArrays() {
    const mainArr = [];
    let length = countries.length;


    for (let i = 0; i < length; i++) {
        const countryArr = [];
        countryArr[0] = countries[i];
        countryArr[1] = countries[i].slice(0, 3).toUpperCase();
        countryArr[2] = countries[i].length;
        mainArr.push(countryArr);
    }

    return mainArr;
}

console.log(`Array of country arrays: `, getArrayOfCountryArrays());


// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
function checkCountrySubstring(str) {
    const arr = [];
    for (const country of countries) {
        if (country.includes(str)) {
            arr.push(country);
        }
        else { continue; }
    }

    return arr;
}

console.log(`These countries:`, checkCountrySubstring('land'), `contain the letters 'land'.`);


// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']

console.log(`These countries:`, checkCountrySubstring('ia'), `contain the letters 'ia'.`);


// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
function findLongestCountry() {
    let longestCountryLength = 0;
    let longestCountryName = '';

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestCountryLength) {
            longestCountryLength = countries[i].length;
            longestCountryName = countries[i].toString();
        }
        else { continue }
    }

    return longestCountryName;
}

console.log(`This country has the longest name: `, findLongestCountry());


// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
function findSameLengthCountries(n) {
    const arr = [];

    for (const country of countries) {
        if (country.length == n) {
            arr.push(country);
        }
        else { continue; }
    }

    return arr;
}

console.log(`These countries have the same length: `, findSameLengthCountries(5));


// Find the longest word in the webTechs array
import { webTechs } from "../Day5/web_tech.js"

function findLongestWord() {
    let result = '';
    let length = 0;


    for (let i = 0; i < webTechs.length; i++) {
        if (webTechs[i].length > length) {
            result = webTechs[i].toString();
        }
        else { continue; }
    }

    return result;
}

console.log(`Longest Tech in array is:`, findLongestWord());


// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
function createTechArrayOfArrays() {
    const arr = [];

    for (let i = 0; i < webTechs.length; i++) {
        const techArr = [];
        techArr.push(webTechs[i]);
        techArr.push(webTechs[i].length);
        arr.push(techArr);
    }

    return arr;
}

console.log(`Array of tech arrays:`, createTechArrayOfArrays());


// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
function createMERNStack() {
    const mernStack = [];

    mernStack.push('MongoDB');
    mernStack.push('Express');
    mernStack.push('React');
    mernStack.push('Node');

    return mernStack;
}

console.log(`MERN stack:`, createMERNStack());


// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
function loopThroughArray() {
    for (const tech of webTechs) {
        console.log(tech);
    }
}

loopThroughArray();


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
function reverseFruitArray() {
    const fruit = ['banana', 'orange', 'mango', 'lemon'];
    const reversed = [];

    for (let i = fruit.length - 1; i >= 0; i--) {
        reversed.push(fruit[i]);
    }

    return reversed;
}

console.log(`Reversed Fruit Array:`, reverseFruitArray());


// Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB

function concatArray() {
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]

    for (const index of fullStack) {
        for (const tech of index) {
            console.log(tech);
        }
    }
}

concatArray();