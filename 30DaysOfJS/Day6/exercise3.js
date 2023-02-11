import { countries } from "../Day5/countries.js"

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
function copyCountriesArray() {
    const result = [];

    for (const country of countries) {
        result.push(country);
    }

    const sortedCountries = result.sort()

    return sortedCountries;
}

console.log(`Sorted Countries:`, copyCountriesArray())



// Reverse the countries array and store it as an array
function reverseCountries() {
    const result = [];

    for (let i = countries.length - 1; i >= 0; i--) {
        result.push(countries[i]);
    }

    return result;
}

console.log(`Reversed Countries:`, reverseCountries())
