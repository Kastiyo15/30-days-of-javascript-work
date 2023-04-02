// write code here and then paste it to appropriate file
let string = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
let regEx = /[.]/g;
let words = string.replace(regEx, '').split(" ");
let wordSet = new Set(words);
let wordCount = [];

for (const w of wordSet) {
  let filteredWords = words.filter((word) => word === w);
  wordCount.push({ word: w, count: filteredWords.length });
}

console.log(wordCount);
