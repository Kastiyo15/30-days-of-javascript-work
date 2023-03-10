// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYYY-MM-DD HH:mm eg. 2020-01-02 07:05

const TIME = new Date()
let year = TIME.getFullYear()
let month = addLeadingZero(TIME.getMonth() + 1)
let date = addLeadingZero(TIME.getDate())
let hours = addLeadingZero(TIME.getHours())
let minutes = addLeadingZero(TIME.getMinutes())

function addLeadingZero(num) {
    return ((num < 10 ? '0' : '') + num)
}

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
