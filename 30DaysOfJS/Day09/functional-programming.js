/* Instead of writing regular loops, JavaScript has lots of inbuilt methods to help us solve complicated problems.
These builtin methods take a callback function as a parameter:
forEach, map, filter, reduce, find, every, some, sort */


///* forEach *///
/* 
w3schools.com:
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
syntax: array.forEach(function(currentValue, index, arr))
*/

/*  SYNTAX */
const forEachSyntax = () => {
  arr.forEach(function (element, index, arr) {
    console.log(index, element, arr);
  });

  // this can be written using arrow function
  arr.forEach((element, arr, index) => {
    console.log(index, element, arr);
  });

  // can be written with arrow function and explicit return
  arr.forEach((element, index, arr) => console.log(index, element, arr));
}

/* EXAMPLE */
const forEachExample = () => {
  let sum = 0;
  const numbers = [1, 2, 3, 4, 5];

  // Print each number
  numbers.forEach(num => console.log(num));

  // Sum all numbers 
  numbers.forEach(num => sum += num);

  console.log(sum);


  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

  countries.forEach(country => console.log(country.toUpperCase()));
}
forEachExample();



///* map *///
/*  
w3schools.com:
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array. 
syntax: array.map(function(currentValue, index, arr))
*/

/* SYNTAX */
const mapSyntax = () => {
  const modifiedArray = arr.map(function (element, index, arr) {
    return element;
  });
}

/* EXAMPLES */
const mapExamples = () => {
  const numbers = [1, 2, 3, 4, 5];
  const numbersSquared = numbers.map((num) => num ** 2); // using arrow function with explicit return

  console.log(numbersSquared);


  const names = ['Max', 'Mona', 'Edward'];
  const namesToUpperCase = names.map((name) => name.toUpperCase()); // using arrow function with explicit return. '=>' means function

  console.log(namesToUpperCase);


  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
  const countriesToUpperCase = countries.map((country) => country.toUpperCase());
  console.log(countriesToUpperCase);

  /*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */

  const countriesFirstThreeLetters = countries.map((country) =>
    country.toUpperCase().slice(0, 3)
  );

  console.log(countriesFirstThreeLetters);
};
mapExamples();


///* filter *///
/*
w3schools.com
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
syntax: array.filter(function(currentValue, index, arr))
*/

const filterExamples = () => {
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];

  const countriesContainingLand = countries.filter((country) => country.includes('land'));
  console.log(countriesContainingLand);

  const countriesEndingIa = countries.filter((country) => country.endsWith('ia'));
  console.log(countriesEndingIa);

  const countriesFiveLetters = countries.filter((country) => country.length === 5);
  console.log(countriesFiveLetters);


  const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  let x = 90;
  const scoresGreaterThanX = scores.filter((person) => person.score > x);

  console.log(scoresGreaterThanX);

};
filterExamples();



///* reduce *///
/* 
w3schools.com
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

/* SYNTAX */
const reduceSyntax = () => {
  arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
    return
  }, initialValue)
}

/* EXAMPLES */
const reduceExamples = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  console.log(sum);
};
reduceExamples();



///* every *///
/*
w3schools.com
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array
syntax: array.every(function(currentValue, index, arr), thisValue)
*/

/* EXAMPLES */
const everyExamples = () => {
  // check if all strings
  const names = ['Max', 'Mona', 'Edward'];
  const areAllStr = names.every((name) => typeof name === 'string');

  console.log(areAllStr);


  // check if all true
  const bools = [true, true, true, true];
  const areAllTrue = bools.every((bool) => bool === true);

  console.log(areAllTrue);
}
everyExamples();



///* find *///
/*
w3schools.com
The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.
syntax: array.find(function(currentValue, index, arr),thisValue)
*/

/* EXAMPLES */
const findExamples = () => {
  // find first age smaller than x
  const ages = [24, 22, 25, 32, 35, 18];
  const findAge = ages.find((age) => age < 24);

  console.log(findAge);
};
findExamples();



///* some *///
/*
w3schools.com
The some() method checks if any array elements pass a test (provided as a callback function).
The some() method executes the callback function once for each array element.
The some() method returns true (and stops) if the function returns true for one of the array elements.
The some() method returns false if the function returns false for all of the array elements.
The some() method does not execute the function for empty array elements.
The some() method does not change the original array.
syntax: array.some(function(value, index, arr), this)
*/

/* EXAMPLES */
const someExamples = () => {
  // check if any name is greater than x letters
  const names = ['Max', 'Mona', 'Edward', 'Elenita'];
  const nameXletters = names.some((name) => name.length > 6);

  console.log(nameXletters);
};
someExamples();



///* sort *///
/* 
w3schools.com
The sort() sorts the elements of an array.
The sort() overwrites the original array.
The sort() sorts the elements as strings in alphabetical and ascending order.
syntax: array.sort(compareFunction)
*/

/* EXAMPLES */
const sortExamples = () => {
  // Sorts values as strings, have to add compare function for numbers!
  const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
  console.log(products.sort()); // alphabetical order


  // Sorting numerical values
  const numbers = [9.81, 3.14, 100, 37];
  // ascending
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  // descending
  numbers.sort((a, b) => b - a);
  console.log(numbers);


  // Sorting Object Arrays - use object key to compare
  /* SYNTAX
    objArr.sort(function (a, b) {
      if (a.key < b.key) return -1
      if (a.key > b.key) return 1
      return 0
    })

    // or

    objArr.sort(function (a, b) {
      if (a['key'] < b['key']) return -1
      if (a['key'] > b['key']) return 1
      return 0
    })
  */

  const users = [
    { name: 'Max', age: 150 },
    { name: 'Mona', age: 50 },
    { name: 'Edward', age: 100 },
    { name: 'Elenita', age: 22 },
  ]

  users.sort((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });
  console.log(users);
};
sortExamples();



const nums = [1, 8, 2, 5, 8, 4, 6, 4, 5, 5, 3];

const sortRemember = () => {
  nums.sort((a, b) => {
    return a - b
  });

  console.log(nums);
}
sortRemember();



///* flat *///
/* 
w3schools.com
The flat() method concatenates sub-array elements.
syntax: array.flat(depth) // 'Infinity' targets long arrays
*/

/* EXAMPLES */
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);