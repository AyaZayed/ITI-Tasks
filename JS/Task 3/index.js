// ** QUESTION 1 **

const JSTips = [
        `For most cases use "==="`,
        "Try to avoid var",
        "Understand objects really well",
        "Avoid side effects in functions",
        "Check your types",
        "Be aware of the known bugs in JS",
        "Try to implement common algorithms with JS",
        "NaN, null, undefined are all a little weird in JS",
        "Make use of how dynamic JS is",
        "Take a deep breath"
]

function randomTip(tipsArr) {
        const randomNum = Math.floor(Math.random() * tipsArr.length)
        return tipsArr[randomNum]
}

console.log("Tip of the day: " + randomTip(JSTips));

console.log("**********************");

// ** QUESTION 2 **

// TODO Uncomment next two lines to see it work
// const email = prompt("Please enter a valid email address")
// console.log(isItEmail(email));

function isItEmail(str) {
        if (!str.startsWith("@") && !str.endsWith("@") && str.includes("@")) {
                return true
        } return false
}

console.log("**********************");

// ** QUESTION 3 **

const studentGrades = [60, 100, 10, 15, 85]
console.log("Students Grades Before Sorting: " + studentGrades)

const sortedGrades = structuredClone(studentGrades).sort((x, y) => {
        return y - x
})
console.log("Students Grades After Sorting: " + sortedGrades)

const highestGrade = sortedGrades.find((grade) => grade <= 100)
console.log("Highest student grade: ", highestGrade);

const gradesBelow60 = studentGrades.filter((grade) => grade < 60)
console.log("Grades below 60: ", gradesBelow60);
console.log("**********************");

// ** QUESTION 4 **

const students = [
        {
                name: 'Aya',
                degree: 93
        }, {
                name: 'Samia',
                degree: 51
        },
        {
                name: 'Ali',
                degree: 80
        }
]

const studentDegree90To100 = students.find((stdObj) => stdObj.degree >= 90 && stdObj.degree <= 100)
console.log("Student with degrees between 90 to 100: ", studentDegree90To100.name)

const studentDegreeBelow60 = students.filter((stdObj) => stdObj.degree < 60).map((obj) => obj.name)
console.log("Students with degrees below 60", studentDegreeBelow60)

function addAndPrint(students) {
        students.push({
                name: 'Ahmed',
                degree: 74
        })
        console.log("Added student:")
        students.forEach((obj) => console.log(obj))
}
addAndPrint(students)

function removeLastAndPrint(students) {
        console.log("Removed student:")
        students.pop()
        students.forEach((obj) => console.log(obj))
}
removeLastAndPrint(students)

function sortNames(students) {
        const sorted = structuredClone(students).sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
        })

        return sorted
}

console.log("Sorted based on names alphabetically: " + sortNames(students))

const studentsClone = structuredClone(students)
studentsClone.splice(2, 0,
        { name: 'Khaled', degree: 75 },
        { name: 'Lina', degree: 88 }
);

console.log("spliced to add:", studentsClone);

const studentsClone2 = structuredClone(studentsClone)
studentsClone2.splice(3, 1)
console.log("spliced to remove:", studentsClone2);

console.log("**********************");


// ** QUESTION 5 **

function validateDate(date) {
        const pattern = /^\d{2}-\d{2}-\d{4}$/
        let isCorrect = pattern.test(date)

        while (!isCorrect) {
                alert("Wrong Date Format")
                date = prompt("Make sure you follow this format: DD-MM-YYYY")
                isCorrect = pattern.test(date)
        }

        const newDate = new Date(date)
        alert(newDate.toDateString())
}

function calculateAge(date) {
        const today = new Date();
        const dateArr = date.split("-");
        const day = dateArr[0];
        const month = dateArr[1];
        const year = dateArr[2];
        // months is 0-indexed, so we subtract 1 to get the correct month
        const birthDate = new Date(year, month - 1, day);
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
        if (days < 0) {
                months--;
                let previousDays = new Date(today.getFullYear(), today.
                        getMonth(), 0).getDate();
                days += previousDays;
        }
        if (months < 0) {
                years--;
                months += 12;
        }
        const age = `Your age is: ${years} years ${months} months and ${days} days`
        alert(age)
        return age
}

// TODO Uncomment next three lines to see it work
// let dateInput = prompt("Please enter your birth date in the following format: DD-MM-YYYY")
// validateDate(dateInput)
// console.log(calculateAge(dateInput))

function validatePhone(phone) {
        const pattern = /^00201[0125]\d{8}$/
        let isCorrect = pattern.test(phone)

        while (!isCorrect) {
                alert("Wrong Phone Format")
                phone = prompt("Make sure you follow this format: 00201xxxxxxxxx")
                isCorrect = pattern.test(phone)
        }

        alert("Your phone number is: " + phone)
}

// TODO Uncomment next two lines to see it work
// const phone = prompt("Please enter your phone number in the following format: 00201xxxxxxxxx")
// validatePhone(phone)

// ** QUESTION 6 **

function getDayName(dateString) {
        const date = new Date(dateString);

        if (isNaN(date)) return "Invalid date";

        const options = { weekday: 'long' };
        return date.toLocaleDateString('en-US', options);
}

let dateStr = new Date().toDateString()

console.log("Today is: " + getDayName(dateStr))

console.log("**********************");

