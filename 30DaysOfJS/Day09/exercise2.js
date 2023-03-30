

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


// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalProductPrice = products.map(item => item.price).filter(item => item > 0).reduce((acc, item) => acc + item, 0);
console.log(totalProductPrice);


// Find the sum of price of products using only reduce reduce(callback))
const sumProductPriceUsingReduce = products.reduce((acc, item) => {
  if (item.price > 0) {
    acc += item.price;
  }
  return acc;
}, 0);
console.log(`Sum of the Prices: ${sumProductPriceUsingReduce}`);


// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
import { countriesList } from './countries_data.js';
const countryList = countriesList.map(country => country);

const filteredCountries = (term) => { return countryList.filter(cou => cou.name.endsWith(term)) };

console.log(filteredCountries("stan"));


// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countCountryInitial() {
  const listOfCountries = countryList.map(country => country.name).sort();
  const listOfInitials = [];

  // Add each initial letter to an array of initials
  listOfCountries.forEach(cou => listOfInitials.push(cou.charAt(0)));
  console.log(listOfInitials);

  const counts = {};

  // Count each time character shows up
  // you can access object properties (add or alter) by using object[property name]
  // e.g. counts["hello"] = 2 will create 'hello: 2' in the object
  for (const num of listOfInitials) {
    // if counts[num] is defined, add 1, otherwise use default 0
    counts[num] = (counts[num] || 0) + 1;
  }

  // Create empty array
  const results = [];
  // Create arrays of keys and values
  const keys = Object.keys(counts);
  const values = Object.values(counts);

  // combine keys and values into an object and push it into array
  for (let i = 0; i < keys.length; i++) {
    let tempObj = { [keys[i]]: values[i] };
    results.push(tempObj);
  }

  return console.log(results);
};
countCountryInitial();



// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = () => {
  const result = countryList.map(cou => cou.name).slice(0, 10);

  return console.log(result);
};
getFirstTenCountries();



// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = () => {
  const result = countryList.filter(cou => countryList.indexOf(cou) >= countryList.length - 10).map(cou => cou.name);

  return console.log(result);
};
getLastTenCountries();



// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const getMostUsedCountryInitial = () => {
  // get list of country initials
  const listOfCountries = countryList.map(cou => cou.name.charAt(0)).sort();

  // create object from intials array
  const counts = {};
  for (const init of listOfCountries) {
    counts[init] = (counts[init] || 0) + 1;
  }
  console.log(counts);

  // sort keys and values
  const values = Object.values(counts).sort((a, b) => b - a);
  const keys = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  // create final array of objects sorted
  const occurences = [];
  for (let i = 0; i < values.length; i++) {
    occurences.push({ [values[i]]: keys[i] })
  }

  return console.log(occurences);
};
getMostUsedCountryInitial();
