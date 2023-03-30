import { countriesList } from "/countries_data.js"
console.log("COUNTRIES DATA -- START")
console.log(countriesList);
console.log("COUNTRIES DATA -- END")

// Assign countries to a new array variable.
const countries = countriesList.map(x => x);


// QUESTION //
console.log("\nQUESTION 1");
// 1 - Use the countries information, in the data folder. Sort countries by name, by capital, by population
// SORT BY NAME - A-Z
const sortCountriesByName = countries.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(sortCountriesByName);

// SORT BY CAPITAL - A-Z
const sortCountriesByCapital = countries.sort((a, b) => {
  if (a.capital < b.capital) return -1;
  if (a.capital > b.capital) return 1;
  return 0;
});
console.log(sortCountriesByCapital);

// SORT BY POPULATION - DESCENDING
const sortCountriesByPopulation = countries.sort((a, b) => {
  if (a.population < b.population) return 1;
  if (a.population > b.population) return -1;
  return 0;
});
console.log(sortCountriesByPopulation);


// QUESTION //
console.log("\nQUESTION 2");
// *** Find the 10 most spoken languages:
const mostSpokenLanguages = (arr, number) => {

  // Get an array of languages, flatted to get all values, and sorted A-Z
  const filteredLanguages = arr.map(country => country.languages).flat(Infinity).sort();

  // create object to add to
  const occurences = {};

  // loop through languages array, counting languages as an object
  for (const language of filteredLanguages) {
    occurences[language] = (occurences[language] || 0) + 1;
  }

  // Create new array to add objects {language: "", count: 0}
  const sortedAZLanguageArray = [];

  // loop through occurences, creating a temp obj then pushing it to new array
  for (const x in occurences) {
    const tempObj = {
      language: '',
      count: 0
    };
    tempObj.language = x;
    tempObj.count = occurences[x];
    sortedAZLanguageArray.push(tempObj);
  }

  console.log("SORTED ARRAY A-Z")
  console.log(sortedAZLanguageArray);

  // Sort it numerically - DESCENDING
  const sortedNumericallyLanguageArray = sortedAZLanguageArray.map(x => x).sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  })

  console.log("SORTED ARRAY NUMERICALLY")
  console.log(sortedNumericallyLanguageArray);


  // Only show number of entries requested (entered in input)
  if (number > 0 && number < sortedNumericallyLanguageArray.length) {
    return console.log(sortedNumericallyLanguageArray.slice(0, number));
  }
  else {
    return console.log(sortedNumericallyLanguageArray);
  }
};
mostSpokenLanguages(countries, 10);



// QUESTION //
console.log("\nQUESTION 3");
// *** Use countries_data.js file create a function which create the ten most populated countries
const mostPopulatedCountries = (arr, listSize) => {
  // create array of countries and populations
  // Wrap an object in () to return it, otherwise JS thinks its a block
  const filteredCountries = arr.map((cou) => ({ country: cou.name, population: cou.population }));

  // Sort array by descending population
  const sortedCountries = filteredCountries.map(x => x).sort((a, b) => {
    if (a.population < b.population) return 1;
    if (a.population > b.population) return -1;
    return 0;
  });

  // Get appropriate list size
  if (listSize > 0 && listSize < sortedCountries.length) {
    return console.log(sortedCountries.slice(0, listSize));
  } else {
    return console.log(sortedCountries);
  }

};
mostPopulatedCountries(countries, 10);


// QUESTION //
console.log(`\nQUESTION 4`)
// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
const ages = [18, 7, 49, 36, 23, 18, 26, 22, 5, 46, 48, 48, 25, 25, 4, 4, 8, 39, 40, 17, 26, 23, 41, 38, 44, 20, 6, 43, 44, 11, 16, 24, 21, 36, 23, 46, 47, 12, 17, 41, 47, 24, 12, 40, 34, 48, 34, 7, 6, 36, 12, 34, 37, 7, 10, 46, 22, 1, 41, 29, 39, 15, 40, 15, 37, 13, 5, 13, 23, 41, 47, 5, 21, 6, 37, 43, 11, 23, 19, 39, 42, 5, 2, 9, 6, 13, 34];

console.log(ages);

const statistics = {
  // Sort the array in ascending order
  sort: function (arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr;
  },
  // Get the length of the array
  count: function (arr) {
    return arr.length;
  },
  // Calculate the sum of the array
  sum: function (arr) {
    return arr.reduce((acc, curr) => acc += curr);
  },
  // Find the smallest value
  min: function (arr) {
    return this.sort(arr)[0];
  },
  // find the largest value
  max: function (arr) {
    return this.sort(arr)[arr.length - 1];
  },
  // Get the largest value - smallest value
  range: function (arr) {
    return this.max(arr) - this.min(arr);
  },
  // Divide the sum by the length
  mean: function (arr) {
    return Math.floor(this.sum(arr) / this.count(arr));
  },
  // The number in the middle
  median: function (arr) {
    const sortedArr = this.sort(arr);
    let result = 0;
    if (sortedArr.length % 2 == 0) {
      let midOne = sortedArr[(sortedArr.length / 2)];
      let midTwo = sortedArr[((sortedArr.length / 2) - 1)];
      result = ((midOne + midTwo) / 2);
    } else {
      result = sortedArr[((sortedArr.length - 1) / 2)];
    }
    return result;
  },
  // The most frequent number
  mode: function (arr) {
    const sortedArr = this.sort(arr);
    const occurences = {};
    for (const num of sortedArr) {
      occurences[num] = (occurences[num] || 0) + 1;
    };
    const sortedList = Object.keys(occurences).sort((a, b) => occurences[a] - occurences[b]); // sorted ascending
    const mode = sortedList[sortedList.length - 1];

    const result = { mode: mode, count: occurences[mode] };
    return result;
  },
  // Calculate the variance
  var: function (arr) {
    // σ2 = (Σ(X - µ)2) / n - 1
    let µ = this.mean(arr);
    let n = this.count(arr);
    let variance = 0;

    variance = arr.reduce((acc, cur) => acc += (Math.pow(cur - µ, 2)), 0) / (n - 1);

    return variance.toFixed(1);
  },
  // Calculate the standard deviation
  std: function (arr) {
    return Math.sqrt(this.var(arr)).toFixed(1);
  },
  // Calculate frequency distribution
  freqDist: function (arr) {
    const sortedArr = this.sort(arr); // sort array ascending
    let length = this.count(arr); // get length

    const occurences = {}; // create empty object
    for (const num of sortedArr) { // fill object with occurences
      occurences[num] = (occurences[num] || 0) + 1;
    };

    const sortedList = Object.keys(occurences).sort((a, b) => occurences[a] - occurences[b]); // sorted ascending

    const dist = sortedList.map((val) => { return ((occurences[val]) / length) * 100 });

    const result = [];

    for (let i = 0; i < dist.length; i++) {
      result.push(`(${sortedList[i]}, ${dist[i].toFixed(2)}%)`);
    };

    return result;
  },
  // List all of the above
  describe: function (arr) {
    let result = 'ARRAY DESCRIPTION:';
    result += `
    Count: ${this.count(arr)}
    Sum: ${this.sum(arr)}
    Min: ${this.min(arr)}
    Max: ${this.max(arr)}
    Range: ${this.range(arr)}
    Mean: ${this.mean(arr)}
    Median: ${this.median(arr)}
    Mode: (${this.mode(arr).mode}, ${this.mode(arr).count})
    Variance: ${this.var(arr)}
    Standard Deviation: ${this.std(arr)}
    Frequency Distribution: [${this.freqDist(arr).join(', ')}]
    `;

    return result;
  }
};

/* console.log(`Count:`, statistics.count(ages));
console.log('Sum:', statistics.sum(ages)); // 744
console.log('Min:', statistics.min(ages)); // 24
console.log('Max:', statistics.max(ages)); // 38
console.log('Range:', statistics.range(ages)); // 14
console.log('Mean:', statistics.mean(ages)); // 30
console.log('Median:', statistics.median(ages)); // 29
console.log('Mode:', statistics.mode(ages)); // {'mode': 26, 'count': 5}
console.log('Variance:', statistics.var(ages)); // 17.5
console.log('Standard Deviation:', statistics.std(ages)); // 4.2
console.log('Frequency Distribution:', statistics.freqDist(ages)) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)] */

console.log(statistics.describe(ages));
