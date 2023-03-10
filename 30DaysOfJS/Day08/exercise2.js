const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// Find the person who has the most skills in the users object.
// add each persons name to an array
// loop through array whilst accessing that persons skills length
// see who's is longest
function findMostSkills() {
  const keys = Object.keys(users);
  const values = Object.values(users);

  let skills = 0;
  let personId = 0;
  let person = "";

  for (let i = 0; i < values.length; i++) {
    let tempSkills = 0;
    tempSkills = values[i].skills.length;

    if (tempSkills > skills) {
      skills = tempSkills;
      personId = i;
    };
  }

  person = keys[personId];

  return `${person} has the most skills with ${skills}.`;

}

console.log(findMostSkills());


// Count logged in users, count users having greater than equal to 50 points from the following object.
function countLoggedInUsers() {
  const keys = Object.keys(users);
  // console.log(keys);
  const values = Object.values(users);
  // console.log(values);

  let counter = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i].points >= 50) { counter++ };
  }

  return `Number of users with 50 or more points: ${counter}`;

}

console.log(countLoggedInUsers());


// Find people who are MERN stack developer from the users object
function findMernStackedUsers() {
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

  const keys = Object.keys(users);
  const values = Object.values(users);

  let mernDeveloper = [];

  for (let i = 0; i < values.length; i++) {
    let repertoire = values[i].skills;

    if (repertoire.includes(mernStack[0]) &&
      repertoire.includes(mernStack[1]) &&
      repertoire.includes(mernStack[2]) &&
      repertoire.includes(mernStack[3])) {
      mernDeveloper.push(keys[i]);
    }
  }

  let people = mernDeveloper.join(', ');

  return people;
}

console.log(findMernStackedUsers());


// Set your name in the users object without modifying the original users object
function addUserToObject() {
  users.Max = {
    email: 'max@max.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 23,
    isLoggedIn: false,
    points: 70
  };

  return users;
}
console.log(addUserToObject())