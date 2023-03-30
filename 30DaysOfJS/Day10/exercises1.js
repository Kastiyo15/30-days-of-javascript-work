
// QUESTIONS // 
console.log(`\nQUESTIONS`);

// create an empty set
console.log(`\nCreate an empty set`);
const emptySet = new Set();
console.log(emptySet); // Set(0) {}


// Create a set containing 0 to 10 using loop
console.log(`\nCreate a set containing 0 to 10 using loop`);
const numbersSet = new Set();
let i = 0;
while (i < 11) {
  numbersSet.add(i);
  i++;
}
console.log(numbersSet);


// Remove an element from a set
console.log(`\nRemove an element from a set`);
numbersSet.delete(7);
console.log(numbersSet);


// Clear a set
console.log(`\nClear a set`);
numbersSet.clear();
console.log(numbersSet);


// Create a set of 5 string elements from array
console.log(`\nCreate a set of 5 string elements from array`);
const stringArr = ['hello', 'my', 'name', 'is', 'max'];
const stringSet = new Set(stringArr);
console.log(stringSet);


// Create a map of countries and number of characters of a country
console.log(`\nCreate a map of countries and number of characters of a country`);
import { countriesList } from './countries_data.js';

const countries = countriesList.map(x => x.name).sort();

const countryMap = new Map();

for (const country of countries) {
  countryMap.set(country, country.length);
}

console.log(countryMap);
