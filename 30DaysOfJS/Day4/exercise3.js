// Write a program which tells the number of days in a month and consider a leap year.
////   Enter a month: January
////   January has 31 days.

////   Enter a month: JANUARY
////   January has 31 day

////   Enter a month: February
////   February has 28 days.

////   Enter a month: FEbruary
////   February has 28 days.

getDaysInMonth()

function getDaysInMonth() {
    let month = prompt("Enter a month:").toLowerCase()
    let year = parseInt(prompt("Enter a year:"))
    let days = calculateDaysInMonth(month, year)
    month = capitaliseFirstLetter(month)

    console.log(`${month} has ${days} days in ${year}.`)
}

function calculateDaysInMonth(input, input2) {
    if (input == 'january' || input == 'march' || input == 'may' || input == 'july' || input == 'august' || input == 'october' || input == 'december') {
        return 31
    }
    else if (input == 'april' || input == 'june' || input == 'september' || input == 'november') {
        return 30
    }
    else if (input == 'february' && input2 % 4 == 0) {
        return 29
    }
    else if (input == 'february') {
        return 28
    }
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
