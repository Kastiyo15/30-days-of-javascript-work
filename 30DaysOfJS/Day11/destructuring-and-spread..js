// destructuring is a way to unpack arrays and objects and assigning a distinct variable

// DESTRUCTURING ARRAYS
function destructArrayExamples() {
  // EXAMPLE 1
  const numbers = [1, 2, 3];
  let [numOne, numTwo, numThree] = numbers;
  console.log(numOne, numTwo, numThree);

  // EXAMPLE 2
  const names = ["Asabeneh", "Brook", "David", "John"];
  let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
  console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

  // EXAMPLE 3
  const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];
  const [frontEnd, backEnd] = fullStack;
  console.log(frontEnd);
  console.log(backEnd);
}
destructArrayExamples();

// You can use a comma to omit values at specific indexes
function omitArrayValueExample() {
  // EXAMPLE 1
  const numbers = [1, 2, 3];
  let [numOne, , numThree] = numbers;
  console.log(numOne, numThree);
}
omitArrayValueExample();

// We can use a default value for any undefined indexes
function defaultValueExample() {
  const names = [undefined, "Max", "Mona"];
  let [
    firstPerson = "Edward",
    secondPerson,
    thirdPerson,
    fourthPerson = "Elenita",
  ] = names;
  console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
}
defaultValueExample();

// Using the spread operator
function assignUsingSpread() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [num1, num2, num3, ...rest] = nums;
  console.log(num1, num2, num3);
  console.log(rest);
}
assignUsingSpread();

// DESTRUCTURING DURING ITERATION
function destructDuringIteration() {
  // EXAMPLE 1
  const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];

  for (const [country, city] of countries) {
    console.log(country, city);
  }

  // EXAMPLE 2
  const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];

  for (const [first, second, third] of fullStack) {
    console.log(first, second, third);
  }
}
destructDuringIteration();

// DESTRUCTURING OBJECTS
// we need to use a same named variable as the property of the object
function destructuringObject() {
  const rectangle = {
    width: 20,
    height: 10,
    area: 200,
  };
  let { width, height, area, perimeter } = rectangle;
  console.log(width, height, area, perimeter);

  // you can also rename during destructuring
  // If the property is undefined, we can assigna  default value
  let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle;
  console.log(w, h, a, p);
}
destructuringObject();

// OBJECT PARAMETERS WITH DESTRUCTURING
function objectParameterFunctions() {
  // EXAMPLE 1
  const rectangle = {
    width: 20,
    height: 10,
    area: 200,
  };

  const calculatePerimeter = ({ width, height }) => 2 * (width + height);
  console.log(calculatePerimeter(rectangle));

  // EXAMPLE 2
  const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    job: "Instructor and Developer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "D3.js",
    ],
    languages: ["Amharic", "English", "Suomi(Finnish)"],
  };

  // function using object destructuring
  // Let us create a function which give information about the person object with destructuring
  const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages,
  }) => {
    const formattedSkills = skills.slice(0, -1).join(", ");
    const formattedLanguages = languages.slice(0, -1).join(", ");

    let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

    return personInfo;
  };
  console.log(getPersonInfo(person));
}
objectParameterFunctions();

// DESTRUCTURE OBJECT DURING ITERATION
function destructureObjectDuringIteration() {
  const todoList = [
    {
      task: "Prepare JS Test",
      time: "4/1/2020 8:30",
      completed: true,
    },
    {
      task: "Give JS Test",
      time: "4/1/2020 10:00",
      completed: false,
    },
    {
      task: "Assess Test Result",
      time: "4/1/2020 1:00",
      completed: false,
    },
  ];

  for (const { task, time, completed } of todoList) {
    console.log(task, time, completed);
  }
}
destructureObjectDuringIteration();

// SPREAD OR REST OPERATOR
// either get the rest of the elements, or spread array elements to another array
function spreadOperatorExamples() {
  // EXAMPLE 1
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [num1, num2, num3, ...rest] = nums;
  console.log(num1, num2, num3);
  console.log(rest);

  const countries = [
    "Germany",
    "France",
    "Belgium",
    "Finland",
    "Sweden",
    "Norway",
    "Denmark",
    "Iceland",
  ];

  // EXAMPLE 2
  let [gem, fra, , ...nordicCountries] = countries;

  console.log(gem);
  console.log(fra);
  console.log(nordicCountries);
}
spreadOperatorExamples();

// SPREAD OPERATOR - COPY ARRAY
function spreadOperatorCopyArray() {
  const evens = [0, 2, 4, 6, 8, 10];
  const evenNumbers = [...evens];

  const odds = [1, 3, 5, 7, 9];
  const oddNumbers = [...odds];

  const wholeNumbers = [...evens, ...odds];

  console.log(evenNumbers);
  console.log(oddNumbers);
  console.log(wholeNumbers);
}
spreadOperatorCopyArray();

// SPREAD OPERATOR - COPY OBJECT
function spreadOperatorCopyObject() {
  const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
  };

  const copiedUser = { ...user };
  console.log(copiedUser);
}
spreadOperatorCopyObject();

// SPREAD OPERATOR - ARROW FUNCTION
function spreadOperatorArrowFunction() {
  const sumAllNums = (...args) => {
    let sum = 0;
    for (const num of args) {
      sum += num;
    }
    return sum;
  };

  console.log(sumAllNums(1, 2, 3, 4, 5));
}
