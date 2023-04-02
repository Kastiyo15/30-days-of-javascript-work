// A set is a collection of elements, can only contain unique elements

// CREATE EMPTY SET
const companies = new Set();
console.log(companies); // Set(0) {}

// CREATE SET FROM ARRAY
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); // Set(4) {"English", "Finnish", "French", "Spanish"}

// sets are iterable, so we can iterate through each of the elements
for (const language of setOfLanguages) {
  console.log(language);
}

// ADDING ELEMENTS TO SET
companies.add("Google");
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in the set
console.log(companies); // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// We can also LOOP to ADD elements to a set
const businesses = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfBusinesses = new Set();
for (const business of businesses) {
  setOfBusinesses.add(business);
}
console.log(setOfBusinesses); // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// DELETE ELEMENT FROM SET
console.log(companies.delete("Google"));
console.log(companies.size); // 4 elements left in the set

// CHECK IF ELEMENT IS IN SET
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true

// CLEARING THE SET
companies.clear();
console.log(companies); // Set(0) {}

// SET EXAMPLES
console.log("\nSET EXAMPLE");

// Counting LANGUAGES
const exampleOneOfSet = () => {
  const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French",
  ];

  const langSet = new Set(languages);
  console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size); // 4

  const counts = [];

  for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l);
    console.log(filteredLang); // ["English", "English", "English"]

    const count = { lang: l, count: filteredLang.length };
    counts.push(count);
  }

  console.log(counts);
};
exampleOneOfSet();

// Can be used to count UNIQUE ITEMS in an array
const exampleTwoOfSet = () => {
  const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
  const setOfNumbers = new Set(numbers);

  console.log(setOfNumbers); // Set(5) {5, 3, 2, 9, 4}
};
exampleTwoOfSet();

// UNION OF SETS
// can be achieved by using the spread operator (...)
console.log("\nUNION OF SETS");
const unionOfSets = () => {
  let a = [1, 2, 3, 4, 5];
  let b = [3, 4, 5, 6];
  let c = [...a, ...b];

  let C = new Set(c);
  return console.log(C); // Set(6) {1, 2, 3, 4, 5,6}
};
unionOfSets();

// INTERSECTION OF SETS
// find the same values in different sets using the filter method
console.log("\nINTERSECTION OF SETS");
const intersectionOfSets = () => {
  let a = [1, 2, 3, 4, 5];
  let b = [3, 4, 5, 6];

  let B = new Set(b);

  let c = a.filter((num) => B.has(num));
  let C = new Set(c);

  console.log(C); // Set(3) {3, 4, 5}
};
intersectionOfSets();

// DIFFERENCE OF SETS
// find the uncommon values in different sets using the filter method
console.log("\nDIFFERENCE OF SETS");
const differenceOfSets = () => {
  let a = [1, 2, 3, 4, 5];
  let b = [3, 4, 5, 6];

  let B = new Set(b);

  let c = a.filter((num) => !B.has(num));
  let C = new Set(c);

  console.log(C); // Set(2) {1, 2}
};
differenceOfSets();
