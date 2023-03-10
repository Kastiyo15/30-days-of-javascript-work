//////////////
console.log(`\nDeclare an empty array;`)
const arr = []
console.log(arr)

//////////////
console.log(`\nDeclare an array with more than 5 number of elements`)
const arr2 = [
    3,
    5,
    8,
    64,
    6,
    8,
    2,
    3,
    88,
]
console.log(arr2)

//////////////
console.log(`\nFind the length of your array`)
console.log(arr2.length)

//////////////
console.log(`\nGet the first item, the middle item and the last item of the array`)
console.log(arr2[0], arr2[Math.floor(arr2.length / 2)], arr2[arr2.length - 1])

//////////////
console.log(`\nDeclare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5`)
const mixedDataTypes = [
    1,
    true,
    'Hello',
    15,
    false,
    '96'
]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

//////////////
console.log(`\nDeclare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon`)
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//////////////
console.log(`\nPrint the array using console.log()`)
console.log(itCompanies)

//////////////
console.log(`\nPrint the number of companies in the array`)
console.log(itCompanies.length)

//////////////
console.log(`\nPrint the first company, middle and last company`)
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

//////////////
console.log(`\nPrint out each company`)
console.log(itCompanies.join(', '))

//////////////
console.log(`\nChange each company name to uppercase one by one and print them out`)
for (let i = 0; i < itCompanies.length; i++) {
    //itCompanies[i] = itCompanies[i].toUpperCase()
    console.log(itCompanies[i].toUpperCase())
}


//////////////
console.log(`\nPrint the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.`)
const itCompaniesSentence = itCompanies.slice(0, itCompanies.length - 1)
console.log(`${itCompaniesSentence.join(', ')}, and ${itCompanies[itCompanies.length - 1]} are big IT companies.`)


//////////////
console.log(`\nCheck if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found`)
let company = 'Tesco'
if (itCompanies.includes(company)) {
    console.log(company)
}
else {
    console.log("The Company is not found.")
}


//////////////
console.log(`\nFilter out companies which have more than one 'o' without the filter method`)
const filteredItCompanies = []
for (let i = 0, j = 0; i < itCompanies.length; i++) {
    if (!itCompanies[i].includes('oo')) 
    { 
        filteredItCompanies[j] = itCompanies[i] 
        j++
    }
}
console.log(filteredItCompanies)


//////////////
console.log(`\nSort the array using sort() method`)
console.log(itCompanies.sort())


//////////////
console.log(`\nReverse the array using reverse() method`)
console.log(itCompanies.reverse())

//////////////
console.log(`\nSlice out the first 3 companies from the array`)
console.log(itCompanies.slice(0, 3))

//////////////
console.log(`\nSlice out the last 3 companies from the array`)
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

//////////////
console.log(`\nSlice out the middle IT company or companies from the array`)
console.log(itCompanies.slice(1, itCompanies.length - 1))


//////////////
console.log(`\nRemove the first IT company from the array`)
const itCompaniesRemovedFirst = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompaniesRemovedFirst.splice(0,1)
console.log(itCompaniesRemovedFirst)

//////////////
console.log(`\nRemove the middle IT company or companies from the array`)
const itCompaniesRemovedMiddle = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompaniesRemovedMiddle.splice(1, itCompanies.length - 2)
console.log(itCompaniesRemovedMiddle)

//////////////
console.log(`\nRemove the last IT company from the array`)
const itCompaniesRemovedLast = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompaniesRemovedLast.pop()
console.log(itCompaniesRemovedLast)

//////////////
console.log(`\nRemove all IT companies`)
const itCompaniesRemovedAll = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompaniesRemovedAll.splice(0)
console.log(itCompaniesRemovedAll)

