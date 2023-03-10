// //  The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(`Ages: ${ages}`);

// Sort the array and find the min and max age
ages.sort();
console.log(`Sorted Ages: ${ages}`);

let minAge = ages[0];
let maxAge = ages[ages.length - 1];
console.log(`Min Age: ${minAge} | Max Age: ${maxAge}`);

// Find the median age(one middle item or two middle items divided by two)
let length = ages.length;
console.log(`Length: ${length}`);
let median = 0;
if ( length % 2) // if odd number, then there will be a middle
{
    median = Math.floor(length / 2);
    console.log(`Median Age: ${ages[median]}`);
}
else // if odd, find half value, and one before it
{
    median = (length / 2);
    median = (ages[median] + ages[median - 1]) / 2;
    console.log(`Median Age: ${median}`);
}

// Find the average age(all items divided by number of items)
let average = ages.reduce((a, b) => a + b, 0); // using arrow function expression // is the same as function (a, b) { return a + b} // the ', 0' is a default value
average /= length;
console.log(`Average: ${average}`);


// Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log(`Range: ${range}`);


// Compare the value of (min - average) and (max - average), use abs() method 
let minAvg = Math.abs(minAge - average).toFixed(2)
let maxAvg = Math.abs(maxAge - average).toFixed(2)
console.log(`min - average: ${minAge} | max - average: ${maxAvg}`)


// // Slice the first ten countries from the countries array
import { countries } from "./countries.js";

const slicedCountries = countries.slice(0, 10);
console.log(`Sliced Countries: ${slicedCountries}`)


// // Find the middle country(ies) in the countries array
let countryLength = countries.length;
console.log(`Array Length: ${countryLength}`)
let middleCountryIndex = Math.floor(countryLength / 2);
let middleCountry = countries[middleCountryIndex];
console.log(`Middle Country: ${middleCountry}`)


// //  Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countryLength)
if (countryLength % 2 == 0) {
    const firstArray = countries.slice(0, countryLength / 2);
    const secondArray = countries.slice(countryLength / 2, countryLength);
    console.log(firstArray, secondArray)
}
else {
    const firstArray = countries.slice(0, middleCountryIndex + 1);
    const secondArray = countries.slice(middleCountryIndex + 1, countryLength);
    console.log(firstArray, secondArray);
}

