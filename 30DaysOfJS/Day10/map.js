
// Creating an EMPTY MAP
const map = new Map();
console.log(map); // Map(0) {}


// CREATING A MAP FROM AN ARRAY
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
];

const countriesMap = new Map(countries);
console.log(countriesMap); // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size); // 3


// ADDING VALUES TO MAPS
const countriesMapTwo = new Map();
countriesMapTwo.set('Finland', 'Helsinki');
countriesMapTwo.set('Sweden', 'Stockholm');
countriesMapTwo.set('Norway', 'Oslo');
console.log(countriesMapTwo); // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMapTwo.size); // 3


// GETTING A VALUE FROM A MAP
console.log(countriesMapTwo.get('Finland')); // Helsinki


// CHECKING KEY EXISTS IN MAP
console.log(countriesMapTwo.has('Finland')); // true


// GETTING VALUES USING LOOP
for (const country of countriesMapTwo) {
  console.log(country);
};
// [ 'Finland', 'Helsinki' ]
// [ 'Sweden', 'Stockholm' ]
// [ 'Norway', 'Oslo' ]

