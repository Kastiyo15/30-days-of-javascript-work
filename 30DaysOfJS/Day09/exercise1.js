

const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// explicit return is with {} and a 'return' statement within. - used for multi-line functions
// implicit return is without. - used for one line functions

// Use forEach to console.log each country in the countries array.
countries.forEach(country => { return console.log(country) });


// Use forEach to console.log each name in the names array.
names.forEach(name => { return console.log(name) });


// Use forEach to console.log each number in the numbers array.
numbers.forEach(number => { return console.log(number) });


// Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map(country => { return country.toUpperCase() });
console.log(uppercaseCountries);


// Use map to create an array of countries length from countries array.
const lengthCountries = countries.map(country => { return country.length });
console.log(lengthCountries);


// Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(number => number ** 2);
console.log(squareNumbers);


// Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map(name => name.toUpperCase());
console.log(uppercaseNames);


// Use filter to filter out countries containing land.
const landCountries = countries.filter(country => country.includes('land'));
console.log(landCountries);


// Use filter to filter out countries having six character.
const sixCharCountries = countries.filter(country => country.length == 6);
console.log(sixCharCountries);


// Use filter to filter out countries containing six letters and more in the country array.
const longerThanFiveCharCountries = countries.filter(country => country.length >= 6);
console.log(longerThanFiveCharCountries);


// Use filter to filter out country start with 'E';
const filterCountryStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(filterCountryStartingWithE);


// Use filter to filter out only prices with values.
const filterValidPrices = products.filter(product => { return product.price > 0 });
console.log(filterValidPrices);


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => {
  return arr.filter(element => typeof element === 'string')
}
console.log(getStringLists(names));


// Use reduce to sum all the numbers in the numbers array.
// reduce need to assign the (accumulated total, current value)
const sumAllNumbers = numbers.reduce((a, b) => a + b, 0);
console.log(sumAllNumbers);


// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
function countriesSentence() {
  let countriesList = countries.reduce((a, b) => { return a + ', ' + b });

  let answer = '';
  answer = countriesList.replace('Iceland', 'and Iceland');

  return `${answer} are northern European countries.`;
}
console.log(countriesSentence());


// Use some to check if some names' length greater than seven in names array
const namesLongerThanSeven = names.some(name => name.length > 7);
console.log(namesLongerThanSeven);


// Use every to check if all the countries contain the word land
const checkIfCountriesContainWordLand = countries.every(country => country.includes('land'));
console.log(checkIfCountriesContainWordLand);


// Explain the difference between find and findIndex.
// find returns the value of the first element to satisfy the test
// findIndex returns the index of the first element to satisfy the test


// Use find to find the first country containing only six letters in the countries array
const firstCountryWithLengthSix = countries.find(country => country.length === 6);
console.log(firstCountryWithLengthSix);


// Use findIndex to find the position of the first country containing only six letters in the countries array
const firstCountryIndexWithLengthSix = countries.findIndex(country => country.length === 6);
console.log(firstCountryIndexWithLengthSix);


// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const indexOfNorway = countries.findIndex(country => country.match('Norway'));
console.log(indexOfNorway);


// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const indexOfRussia = countries.findIndex(country => country.match('Russia'));
console.log(indexOfRussia);
