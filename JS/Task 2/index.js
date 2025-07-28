// ** TASK 1

function numberOfVowels(str) {
        const vowels = ['a', 'e', 'o', 'u', 'i']
        let vowelNum = 0
        for (let i = 0; i < str.length; i++) {
                vowels.forEach(v => {
                        if (str[i].toLowerCase() === v) vowelNum++
                });
        }

        return vowelNum
}

console.log(numberOfVowels('Let it be'))

// ** TASK 2

function capitalize(str) {
        const strArr = str.split(" ")
        let capitalized = strArr.map(word =>
                word[0].toUpperCase() + word.slice(1)
        ).join(" ")

        return capitalized
}

console.log(capitalize('lucy in the sky with diamonds'))

// ** TASK 3

function countChar(str, char) {
        const strArr = str.split("")
        return strArr.filter((c) => c == char).length;
}

console.log(countChar('A day in the life', 'e'));

// ** TASK 4

function countWords(str) {
        return str.split(" ").length
}

console.log(countWords('Hey Jude'));

// ** TASK 5
function getUserName() {
        let userName = prompt('Enter Your Name')

        while (!isNaN(userName)) {
                userName = prompt('Enter A Valid Name')
        }
        return userName
}

// console.log(getUserName())

// *********

function getUserNum() {
        let userNum = prompt('Enter Your Phone Number')
        const pattern = /^(010|011|012|015)-\d{8}$/

        while (!userNum.match(pattern)) {
                userNum = prompt('Please enter the number like 010-12345678')
        }

        return userNum
}

// console.log(getUserNum())
