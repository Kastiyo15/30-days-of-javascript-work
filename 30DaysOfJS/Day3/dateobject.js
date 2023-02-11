// DATE OBJECT
// is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object
// getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()


const now = new Date()          // creating a time object
console.log(now)                // getting the current time
console.log(now.getFullYear())  // getting the full year
console.log(now.getMonth())     // getting the month    (0-11)
console.log(now.getDate())      // getting the date     (1-31)
console.log(now.getDay())       // getting the day      (0-6)
console.log(now.getHours())     // getting the hours    (0-23)
console.log(now.getMinutes())   // getting the minutes  (0-59)
console.log(now.getSeconds())   // getting the seconds  (0-59)
console.log(now.getTime())      // getting the miliseconds since Jan 1st, 1970 (Unix time)

const allSeconds = Date.now()   //
console.log(allSeconds)         // 1578092201341, this is the number of seconds passed from January 1


// formatted dates
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
