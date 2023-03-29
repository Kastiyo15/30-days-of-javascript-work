// Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "",
  lastName: "",
  incomes: {
    job: 500,
    music: 150,
    tutor: 40
  },
  expenses: {
    tax: 250,
    mortgage: 150,
    loan: 80
  },
  totalIncome: function () {
    let sum = 0;
    const values = Object.values(this.incomes);
    for (const income of values) { sum += income; };
    return sum;
  },
  totalExpenses: function () {
    let sum = 0;
    const values = Object.values(this.expenses);
    for (const expense of values) { sum += expense; };
    return sum;
  },
  addIncome: function (type, value) {
    this.incomes[type] = value;
  },
  addExpense: function (type, value) {
    this.expenses[type] = value;
  }

}
console.log(personAccount);
personAccount.addIncome("dancing", 500);
personAccount.addExpense("dance lessons", 600);
console.log(personAccount);


// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
import { users } from './exercise3-arrays.js';
import { products } from './exercise3-arrays.js';

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(userName, eMail, passWord) {
  const values = Object.values(users);
  console.log(values);

  // loop through array of users, see if username/email match
  for (let i = 0; i < values.length; i++) {
    if (values[i].username === userName || values[i].email === eMail) {
      return console.log(`User already exists.`);
    }
  }

  // if doesn't match, then add new user to array
  const newUser = {
    _id: Math.floor(Math.random() * 0xffffff).toString(16),
    username: userName,
    email: eMail,
    password: passWord,
    createdAt: getTime(),
    loggedIn: false
  }

  users.push(newUser);

}

// Get the current time 
function getTime() {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();
  let timeOfDay = '';

  if (hour > 11) {
    timeOfDay = 'PM'
  } else { timeOfDay = 'AM'; }

  let currentTime = '';
  currentTime = `${date}/${month}/${year} ${hour}:${minute} ${timeOfDay}`;

  return currentTime;
}

signUp('Max', 'max@max.com', '182371');
console.log(users);



// b. Create a function called signIn which allows user to sign in to the application

function signIn(userName, eMail, passWord) {
  const values = Object.values(users);
  console.log(values);

  // loop through array of users, see if username/email match
  for (let i = 0; i < values.length; i++) {
    if (values[i].username === userName || values[i].email === eMail) {
      if (values[i].password === passWord) {
        return console.log(`Login successful!\nWelcome, ${values[i].username}!`);
      }
      else {
        return console.log("Incorrect username or password!");
      }
    }
  }
}
signIn('Max', 'max@max.com', '182371');


// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
function rateProduct(user) {
  // get name of the product to be rated
  let product = prompt("Product name: ");
  let score = parseInt(prompt("Rating: "));

  // loop through the products array
  const values = Object.values(products);

  for (let i = 0; i < values.length; i++) {
    if (values[i].name == product) {
      // add rating and id
      values[i].ratings.push({ userId: `${user}`, rating: score });
      return console.log("Rating Successful!")
    }
  }
}
// rateProduct(users[5]._id);
console.log(products);


  // b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  const values = Object.values(products);
  let sum = 0;
  let average = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i]._id == productId && values[i].ratings.length > 0) {
      for (const score of values[i].ratings) {
        sum += score.rate;
      }

      average = sum / values[i].ratings.length;
      return console.log(`Average rating: ${average}`);
    }
  }
}
averageRating(`eedfcf`);



// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  const values = Object.values(products);
  console.log(values)

  for (let i = 0; i < values.length; i++) {
    let product = values[i];

    if (product._id == productId) {
      product.likes.push(userId);
    }
  }

  return console.log(products);
}
likeProduct(`hedfcg`, `zwf8md`)
