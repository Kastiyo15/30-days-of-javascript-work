//  //  for loop    //  //
// example 1 //
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}


// example 2 // - Adding all elements in an array
function addAllElements() {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];  // can be shorten, sum += numbers[i]

    }
    console.log(sum);  // 15
}


// example 3 // - create a new array based on existing array
function newArrayBasedOnExistingArray() {
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
    const newArr = [];
    for (let i = 0; i < countries.length; i++) {
        newArr.push(countries[i].toUpperCase()); // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
    }
    console.log(newArr);
}


//  //  while loop    //  //
// example 1 //
function exampleWhileLoop() {
    let i = 0
    while (i <= 5) {
        console.log(i)  // 0 1 2 3 4 5
        i++
    }
}


//  // do while loop    //  //
// example 1 //
function exampleDoWhileLoop() {
    let i = 0
    do {
        console.log(i)  // 0 1 2 3 4 5
        i++
    } while (i <= 5)
}


//  // for of loop    //  //
// We use for of loop for arrays. Handy way to iterate through an array if we are not interested in the index of each element in the array.
// example 1 //
function forOfLoopOne() {

    const numbers = [1, 2, 3, 4, 5]

    for (const num of numbers) {
        console.log(num)            // 1 2 3 4 5
    }

    for (const num of numbers) {
        console.log(num * num)      // 1 4 9 16 25
    }

    // adding all the numbers in the array
    let sum = 0
    for (const num of numbers) {
        sum += num
    }
    console.log(sum) // 15


    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ]

    for (const tech of webTechs) {
        console.log(tech.toUpperCase()) // HTML CSS JAVASCRIPT REACT NODE MONGODB
    }

    for (const tech of webTechs) {
        console.log(tech[0])            // get only the first letter of each element,  H C J R N M
    }
}


//  // break //  //
// Break is used to interrupt a loop.
function exampleBreak() {
    for (let i = 0; i <= 5; i++) {
        if (i == 3) {
            break
        }
        console.log(i)    // 0 1 2
    }
}

//  // continue //  //
// We use the keyword continue to skip a certain iterations
function exampleContinue() {
    for (let i = 0; i <= 5; i++) {
        if (i == 3) {
            continue
        }
        console.log(i) // 0 1 2 4 5
    }
}