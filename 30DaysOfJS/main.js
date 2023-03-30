// write code here and then paste it to appropriate file

// QUESTIONS
import { countriesList } from './countries_data.js';
const countries = countriesList.map(x => x);

// How many languages are there in the countries object file.
const getUniqueLanguages = (arr) => {
  const languagesList = arr.map(x => x.languages).flat(Infinity).sort();

  const langSet = new Set(languagesList);

  const numOfLanguages = langSet.size;


  return console.log("Number of Unique Languages:") + console.log(numOfLanguages);
};
getUniqueLanguages(countries);


// *** Use the countries data to find the 10 most spoken languages:
const mostSpokenLanguages = (arr, val = arr.length) => {
  const langList = arr.map(x => x.languages).flat(Infinity).sort();
  const langSet = new Set(langList);

  const result = [];

  // add objects with language and count
  for (const lang of langSet) {
    const filteredLang = langList.filter(l => l === lang);

    let object = {[lang]: filteredLang.length};
    result.push(object);
  }

  // sort numerically
  result.sort((a, b) => Object.values(b) - Object.values(a));

  // return required length of array
  return console.log(result.slice(0, val));
};
mostSpokenLanguages(countries, 10);


