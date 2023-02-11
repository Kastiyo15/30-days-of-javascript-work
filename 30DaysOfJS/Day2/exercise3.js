// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let counter = 0
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
counter = string.match(/love/gi).length
console.log(`1. ${counter}`)


// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
string = 'You cannot end a sentence with because because because is a conjunction'
counter = string.match(/because/gi).length
console.log(`2. ${counter}`)


// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

    let regEx = /[^\w\s]/g // ^ means 'not', \w means alphanumeric characters \s means spaces
    let ans = sentence.replace(regEx, "")
    console.log(`3. ${ans}`)


// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary = parseInt(string.match('5000'))
let bonus = parseInt(string.match('10000'))
let courses = parseInt(string.match('15000'))
let annualIncome = (salary * 12) + (bonus) + (courses * 12)
console.log(`4. ${annualIncome}`)