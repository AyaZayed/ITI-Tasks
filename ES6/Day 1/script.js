// ** QUESTION 1 **

let numArr = [1, 24, 8, 3, 5, 33, 65, 90]

let sortedAscending = structuredClone(numArr).sort((a, b) => a - b)
console.log(sortedAscending);

let sortedDescending = structuredClone(numArr).sort((a, b) => b - a)
console.log(sortedAscending);

let numsOver50 = numArr.filter((num) => num > 50)
console.log(numsOver50);

let maxNum = Math.max(...numArr)
let minNum = Math.min(...numArr)

console.log(`Max: ${maxNum}, Min: ${minNum}`);

// ** QUESTION 2 **

const calc = (op, ...ints) => {
        let result;
        switch (op) {
                case '+': {
                        result = ints.reduce((int, acc) => int + acc)
                        break;
                }
                case '-': {
                        result = ints.reduce((int, acc) => int - acc)
                        break;
                }
                case '*': {
                        result = ints.reduce((int, acc) => int * acc)
                        break;
                }
                case '/': {
                        result = ints.reduce((int, acc) => int / acc)
                        break;
                } default: {
                        break;
                }
        }

        return `The result of ${op} operation for ${ints.join()} is ${result}`
}

console.log(calc('*', 1, 2, 3));

// ** QUESTION 3 **

const stringPattern = /^[A-Za-z]+$/

function validate(key, keyName, isNum) {
        let inputKey = prompt(`Enter the project ${key} key`)
        while (inputKey !== keyName) {
                alert(`Please enter the correct ${key} key`)
                inputKey = prompt(`Enter the project ${key} key`)
        }
        let value = prompt(`Enter the project ${key} value`)
        if (isNum) {
                while (isNaN(value)) {
                        alert(`Please enter the ${key} as a number`)
                        value = prompt(`Enter the project ${key} value`)
                }
        } else {
                while (!stringPattern.test(value)) {
                        alert(`Please enter the ${key} as a text`)
                        value = prompt(`Enter the project ${key} value`)
                }
        }
        return value
}

// const projectId = validate('id', 'projectId', true)
// const projectName = validate('name', 'projectName', false)
// const duration = validate('duration', 'duration', true)

const project = {
        projectId,
        projectName,
        duration,
        printData() {
                return `Project id: ${this.projectId}, Project Name: ${this.projectName}, 
                Project Duration: ${this.duration}`
        }
}

// console.log(project.printData())
