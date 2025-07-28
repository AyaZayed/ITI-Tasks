console.log("This is the External JavaScript file")

console.log(number1)
console.log(number2)
console.log(number3)

var number1 = 3;
var number2 = 2.9;
var number3 = 0xff

let firstName = "Aya"
let middleName = 'Mohamed'
let lastName = `Zayed`

const flag = true


firstName[3] = 'S'

console.log(firstName)
console.log(typeof number1)
console.log(typeof number2)
console.log(typeof number3)
console.log(typeof firstName)
console.log(typeof middleName)
console.log(typeof lastName)
console.log(typeof flag)

console.table([number1, number2, number3, firstName, middleName, lastName, flag])

console.log(`number1+number2: ${number1 + number2}`);
console.log(`flag+ number1: ${flag + number1}`);
console.log(`firstName+flag: ${firstName + flag}`);
console.log(`number1+firstName: ${number1 + firstName}`);
console.log(
        `number1+number2+firstName: ${number1 + number2 + firstName}`
);
console.log(
        `number1+firstName+number2: ${number1 + firstName + number2}`
);
console.log(`number1*flag: ${number1 * flag}`);
console.log(`number1/lastName: ${number1 / lastName}`);

console.log(`${firstName} ${middleName} ${lastName}`);


// ** FUNCTIONS **


function oddOrEven(num) {
        if (num % 2 === 0) {
                return 'even'
        } else {
                return 'odd'
        }
}

console.log(oddOrEven(11))

function print1to10() {
        let i
        for (let i = 1; i <= 10; i++) {
                console.log(i)
        }
        console.log(i)
}

print1to10()

function posOrNeg(num) {
        if (num === 0) {
                return 'Number is 0'
        } else if (num < 0) return 'Number is Negative'
        else return 'Number is Positive'
}

console.log(posOrNeg(0));

function multiplTable(num) {
        for (let i = 1; i <= 12; i++) {
                console.log(`${num} * ${i} = ${num * i}`)
        }
}

multiplTable(3)

function dayOfTheWeek(num) {
        switch (num) {
                case 1:
                        return 'Sunday'
                case 2:
                        return 'Monday'
                case 3:
                        return 'Tuesday'
                case 4:
                        return 'Wednesday'
                case 5:
                        return 'Thursday'
                case 6:
                        return 'Friday'
                case 7:
                        return 'Saturday'
                default:
                        return "Please enter a number from 1 to 7"
        }
}

console.log(dayOfTheWeek(7));

function weekendOrWeekday(num) {
        if (num === 1 || num === 7) {
                return 'Weekend'
        }
        if (num > 1 && num < 7) {
                return 'Weekday'
        } else {
                return "Please enter a number from 1 to 7"
        }
}

console.log(weekendOrWeekday(5));

console.log(number1.toString(16))

