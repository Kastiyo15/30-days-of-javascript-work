
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];


// QUESTIONS

// Find a union b
const union = (a, b) => {
  const c = [...a, ...b];
  const C = new Set(c);

  return console.log("Union:"), console.log(C);
};
union(a, b);


// Find a intersection b
const intersection = (a, b) => {
  const B = new Set(b);
  const C = new Set(a.filter(num => B.has(num)));

  return console.log("Intersection:"), console.log(C);
};
intersection(a, b);


// Find a difference b
const difference = (a, b) => {
  const B = new Set(b);
  const C = new Set(a.filter(num => !B.has(num)));

  return console.log("Difference:"), console.log(C);
};
difference(a, b);