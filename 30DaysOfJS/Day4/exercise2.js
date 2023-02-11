// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// getGradeFromScore()             // <------ ANSWER -------

function getGradeFromScore() {
    let score = parseInt(prompt("Enter your score:"))
    let grade = calculateGrade(score)
    console.log(`Score: ${score} | Grade: ${grade}`)
}

function calculateGrade(score) {
    switch (true) {
        case (score >= 80 && score <= 100):
            return 'A'
        case (score >= 70 && score <= 79):
            return 'B'
        case (score >= 60 && score <= 69):
            return 'C'
        case (score >= 50 && score <= 59):
            return 'D'
        case (score < 50):
            return 'U'
    }
}


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// checkWhichSeason()             // <------ ANSWER -------

function checkWhichSeason() {
    let month = prompt("Enter the month:")
    month = month.toLowerCase()
    let season = calculateSeason(month)
    console.log(`Month: ${month} | Season: ${season}`)
}

function calculateSeason(month) {
    switch (true) {
        case (month == 'march' || month == 'april' || month == 'may'):
            return 'Spring'
        case (month == 'june' || month == 'july' || month == 'august'):
            return 'Summer'
        case (month == 'september' || month == 'october' || month == 'november'):
            return 'Autumn'
        case (month == 'december' || month == 'january' || month == 'february'):
            return 'Winter'
    }
}


// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// checkDayOfTheWeek()             // <------ ANSWER -------

function checkDayOfTheWeek() {
    let day = prompt("Enter the day:")
    day = day.toLowerCase()

    let isWeekday = checkWeekDay(day)
    
    console.log(`Day: ${day} | Type: ${isWeekday}`)
}

function checkWeekDay(input) {
    let string = input

    if (string.includes("sat") || string.includes("sun")) {
        return 'weekend'
    }
    else {
        return 'weekday'
    }

}