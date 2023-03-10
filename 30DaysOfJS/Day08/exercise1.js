function addQuestion(string) {
  const question = document.createElement("h4");
  question.style.width = "100%";
  question.style.height = "100%";
  question.style.marginBottom = "3rem";
  question.style.marginTop = "3rem";
  question.innerHTML = string;
  document.getElementById("main").appendChild(question);
}

// Create an empty object called dog
addQuestion("Create an empty object called dog"); //this is just a test

const dog = {};


// Print the the dog object on the console

console.log(dog);


// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const pet = {
  name: "Monty",
  legs: 4,
  color: "fox-red",
  age: 1,
  bark: function() { // a method is a function stored as an object property
    return "woof woof";
  }
};

console.log(pet);


// Get name, legs, color, age and bark value from the dog object
pet.getPetProperties = function() {
  return `Name: ${this.name}\nLegs: ${this.legs}\nColour: ${this.color}\nAge: ${this.age}\nBark: ${this.bark()}`;
};

console.log(pet.getPetProperties());


// Set new properties the dog object: breed, getDogInfo
pet.breed = "labrador";
console.log(pet);