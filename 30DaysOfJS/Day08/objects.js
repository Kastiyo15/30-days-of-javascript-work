// Everything can be an object. An object is a key value pair.
// The order of the key is not reserved, there is no order.
// Arrays have order.


/* EMPTY OBJECT */
const empty = {};


/* OBJECT WITH VALUES */
const rectangle = {
  length: 20,
  width: 20
};
console.log(rectangle);


/* GETTING VALUES FROM OBJECT */
// assigning keys and values
// access values using two methods
// - using . followed by key name, if the key name is one word
// - using square bracket and a quote
const person = {
  firstName: 'Max',
  lastName: 'Bedford',
  age: 23,
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'SASS'
  ],
  isMarried: false,
  'phone number': '+4491267367842',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
};
console.log(person);

// accessing values using .
console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Full Name: ${person.getFullName()}`);

// value can be accessed using square bracket and key name
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number']);


/* SETTING NEW KEY FOR AN OBJECT */
// objects are mutable (liable to change), we can modify the content after it gets created
const user = {
  firstName: 'Max',
  lastName: 'Bedford',
  age: 23,
  skills: [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  isMarried: false,
  'phone number': '+4491267367842',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
user.nationality = 'British';
user.country = 'England';
user.title = 'developer';
user.skills.push('SasS');

user.getUserInfo = function() {
  let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ');
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
}
console.log(user);
console.log(user.getUserInfo());


/* OBJECT METHODS */
//Object methods: Object.assign, Object.keys, Object.values, Object.entries

/* OBJECT.ASSIGN */
// copy an object without modifying the original object
const copyUser = Object.assign({}, user);
console.log(copyUser);

/* OBJECTS.KEYS */
// get the keys or properties of an object as an array
const keys = Object.keys(copyUser);
console.log(keys);

/* OBJECT.VALUES */
// get values of an object as an array
const values = Object.values(copyUser);
console.log(values);

/* OBJECT.ENTRIES */
// get the keys and the values in an array
const entries = Object.entries(copyUser);
console.log(entries);

/* HASOWNPROPERTY */
// hasOwnProperty checks if a specific key or property exists in an object
console.log(copyUser.hasOwnProperty('firstName'));
