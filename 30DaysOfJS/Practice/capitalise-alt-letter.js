function capitaliseLetters(string) {
    let str = "";
    let strLen = string.length;
    let counter = 0;

    for (let i = 0; i < strLen; i++) {
        if (string[i] == ' ') {
            str += ' ';
            continue;
        }
        else if (counter % 2 == 0) {
            str += string[i].toUpperCase();
            counter++;
            continue;
        }
        else {
            str += string[i].toLowerCase();
            counter++;
            continue;
        }
    }


    return str;
}

console.log(capitaliseLetters("lorem ipsum ipsum "))