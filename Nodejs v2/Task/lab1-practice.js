const students = [
        { name: "Alice", age: 20, grade: 85, subjects: ["Math", "Physics"] },
        { name: "Bob", age: 22, grade: 92, subjects: ["Chemistry", "Biology"] },
        { name: "Charlie", age: 19, grade: 78, subjects: ["Math", "Chemistry"] },
        { name: "Diana", age: 21, grade: 95, subjects: ["Physics", "Biology"] },
        { name: "Eve", age: 20, grade: 88, subjects: ["Math", "Biology"] },
];

// ** Exercise 1: Using`map()` **

// 1. Create an array of student names only
const onlyNames = students.map((student) => student.name);
// console.log(onlyNames);


// 2. Create an array of objects with `name` and `status` where status is "Pass" if grade >= 80, otherwise "Fail"
const passNames = students.map((student) => {
        if (student.grade >= 80) {
                return {
                        name: student.name,
                        status: "Pass",
                };
        } else {
                return {
                        name: student.name,
                        status: "Fail",
                };
        }

});
// console.log(passNames);

// 3. Create an array of strings: "StudentName (Age years old)"
const ages = students.map((student) => {
        return `${student.name} is ${student.age} years old.`;
});
// console.log(ages);

// **Exercise 2: Using `filter()`**

// 1. Filter students who passed(grade >= 80)
const passed = students.filter((student) => student.grade >= 80);
// console.log(passed);

// 2. Filter students who are 20 years old or younger
const young = students.filter((student) => student.age <= 20);
// console.log(young);

// 3. Filter students who study "Math"
const math = students.filter((student) => student.subjects.includes("Math"));
// console.log(math);

// **Exercise 3: Using `reduce()`**

// 1. Calculate the average grade of all students
const average = students.reduce((total, student) => total + student.grade, 0) / students.length;
// console.log(average);

// 2. Count how many students study each subject(return an object with subject counts)
const subjectCounts = students.reduce((counts, student) => {
        student.subjects.forEach((subject) => {
                counts[subject] = (counts[subject] || 0) + 1;
        });
        return counts;
}, {});

// console.log(subjectCounts);

// 3. Find the student with the highest grade

const highest = students.reduce((highest, student) => {
        if (student.grade > highest.grade) {
                return student;
        } else {
                return highest;
        }
}, students[0]);
// console.log(highest);

// **Exercise 4: Chaining Array Methods**

// Combine multiple methods to find the names of students who:

// - Are 21 or younger
// - Have a grade above 85
// - Study "Math"

const names = students
        .filter((student) => student.age <= 21 && student.grade > 85 && student.subjects.includes("Math"))
        .map((student) => student.name);
// console.log(names);


// **Exercise 5: Array Spread**

const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];

// 1. Combine both arrays into one using spread operator
const fruitsAndVegetables = [...fruits, ...vegetables]
// console.log(fruitsAndVegetables);

// 2. Create a new array with "orange" at the beginning, then fruits, then "potato", then vegetables
const moreFood = ["orange", ...fruits, "potato", ...vegetables]
// console.log(moreFood);

// 3. Create a copy of the fruits array and add "grape" to the copy(original should remain unchanged)
const fruitsCopy = [...fruits, "grape"]
// console.log(fruits);


// **Exercise 6: Object Spread**

const baseUser = { name: "John", age: 25 };
const address = { city: "New York", country: "USA" };

// 1. Create a new object combining baseUser and address
const baseUserAddress = { ...baseUser, ...address }
// console.log(baseUserAddress);

// 2. Create a new user object with all baseUser properties but change the age to 26
const baseUser26 = { ...baseUser, age: 26 }
// console.log(baseUser26);

// 3. Create a user profile with baseUser, address, and additional property`isActive: true`
const userProfile = { ...baseUser, ...address, isActive: true }
// console.log(userProfile);

// **Exercise 7: Function Parameters**

// 1. Create a function `sum(...numbers)` that accepts any number of arguments and returns their sum
const sum = function (...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum(1, 2, 3, 8, 5));

// 2. Create a function `introduce(name, age, ...hobbies)` that returns: "Hi, I'm [name], [age] years old, and I like [hobbies joined by ', ']"

const introduce = function (name, age, ...hobbies) {
        return `Hi, I'm ${name}, ${age} years old, and I like ${hobbies.join(", ")}`
}
// console.log(introduce('Aya', 25, 'reading', 'swimming'));


// **Exercise 8: Array Destructuring with Rest**

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

// 1. Destructure to get first color, second color, and all remaining colors in a separate array
const [firstColor, secondColor, ...remainingColors] = colors;
// console.log(firstColor, secondColor, remainingColors);

// 2. Destructure to get first color and all others in a rest array

const [firstColor1, ...remainingColors1] = colors;
// console.log(firstColor1, remainingColors1);


// **Exercise 9: Object Destructuring with Rest**

const person = {
        name: "Sarah",
        age: 28,
        city: "Boston",
        job: "Developer",
        hobby: "Reading",
};

// 1. Destructure to get `name` and`age`, with all other properties in a rest object
const { name, age, ...remaining } = person
// console.log(name, age, remaining);

// 2. Destructure to get`name`, and group the rest as `details`
const { name: personName, ...details } = person
// console.log(personName, details);


// **Exercise 10: Three Function Types**

// Create the same function `calculateArea(length, width)` using all three methods:

// 1. ** Function Declaration **

// console.log(calculateArea(2, 3));
// console.log(calculateAreaExp(2, 3)); => error 
// console.log(calculateAreaArrow(2, 3)); => error

function calculateArea(length, width) {
        return length * width
}

// 2. ** Function Expression **
var calculateAreaExp = function (length, width) {
        return length * width
}

// 3. ** Arrow Function **
var calculateAreaArrow = (length, width) => {
        return length * width
}

// Then answer these questions in comments:

// - Which ones are hoisted ? function declaration
// - Which one doesn't have its own `this` context? arrow function
// - Which one is most concise ? function Expression

// ** Hint **: Test hoisting by trying to call the function before its declaration.

// **Exercise 11: `this` Context Difference**

const calculator = {
        value: 10,
        regularMethod: function (num) { return this.value * num },

        arrowMethod: (num) => { return this.value * num },

        shorthandMethod(num) { return this.value * num }
};

// Test all three methods and explain in comments why the arrow function behaves differently.
// console.log(calculator.regularMethod(2)); => 20
// console.log(calculator.arrowMethod(2)); => NaN
// console.log(calculator.shorthandMethod(2)); => 20


// ** Exercise 12: Function as Parameter **

// 1. Create a function `processNumbers(numbers, operation)` that takes an array and a callback function
// 2. Test it with different operations:
// - Double each number
//         - Square each number
//                 - Check if each number is even(return true / false)

const numbers = [1, 2, 3, 4, 5, 6];

const processNumbers = function (numbers, operation) {
        return numbers.map(operation);
}

// console.log(processNumbers(numbers, num => num * 2));
// console.log(processNumbers(numbers, num => num * num));
// console.log(processNumbers(numbers, num => num % 2 === 0));


// ** Exercise 13: Function Returning Function **

// Create a function `createValidator(minLength)` that returns a validation function. The returned function should:

// - Take a string as input
// - Return`true` if string length >= minLength
// - Return`false` otherwise

const createValidator = function (minLength) {
        return function (str) {
                return str.length >= minLength;
        }
}

const validatePassword = createValidator(8);
const validateUsername = createValidator(3);
// console.log(validatePassword("hello")); // false
// console.log(validateUsername("ayazzzz")); // true

// ** Part 6: Shallow vs Deep Copy **

const originalData = {
        name: "Company ABC",
        employees: [
                { name: "John", department: "IT" },
                { name: "Jane", department: "HR" },
        ],
        location: {
                city: "New York",
                address: "123 Main St",
        },
};

// 1. Create a shallow copy using spread operator and modify:

//    - The`name` property
//         - An employee's department
//                 - The city in location

//    What happens to the original object ? Explain in comments.

const shallowCopy1 = { ...originalData, name: 'Aya', employees: [{ ...originalData.employees[0], department: 'Marketing' }], location: { ...originalData.location, city: 'Mansoura' } }

// console.log(originalData);
// console.log(shallowCopy1);

// What happens to the original object ? Explain in comments.
// The original object is not modified because the spread operator creates a new object and does not mutate the original object.


// Using the same `originalData` from Exercise 14, implement deep copying using ** THREE different methods **:

// ** Method 1: JSON.parse(JSON.stringify()) **

const originalData2 = {
        name: "Company ABC",
        employees: [
                { name: "John", department: "IT" },
                { name: "Jane", department: "HR" },
        ],
        location: {
                city: "New York",
                address: "123 Main St",
        },
        func() {
                console.log('hello');
        },
        date: new Date(),
        undefined: undefined
};

const deepCopy1 = JSON.parse(JSON.stringify(originalData2));
// console.log(deepCopy1);

// - When does this method fail ? (Hint: functions, dates, undefined)
// It fails when the object contains functions, dates, or undefined values.

// ** Method 2: Recursive function**

function deepCopy(obj) {
        // Your implementation here
        // Hint: Check if obj is object, handle arrays, recursively copy properties
        if (typeof obj !== 'object' || obj === null) {
                return obj;
        }
        if (Array.isArray(obj)) {
                return obj.map(deepCopy);
        }
        const copy = {};
        for (const key in obj) {
                copy[key] = deepCopy(obj[key]);
        }
        return copy;
}

const deepCopy2 = deepCopy(originalData2);
// console.log(deepCopy2);

// **Method 3: Using a library (simulate with manual implementation)**
// Create a function `lodashCloneDeep(obj)` that handles:
// - Objects and arrays
// - Nested structures
// - Different data types

function lodashCloneDeep(obj) {
        // Your implementation here
        // Hint: Check if obj is object, handle arrays, recursively copy properties
        if (typeof obj !== 'object' || obj === null) {
                return obj;
        }
        if (Array.isArray(obj)) {
                return obj.map(lodashCloneDeep);
        }
        if (obj instanceof Date) {
                return new Date(obj.getTime());
        }
        const copy = {};
        for (const key in obj) {
                copy[key] = lodashCloneDeep(obj[key]);
        }
        return copy;
}

const deepCopy3 = lodashCloneDeep(originalData2);
// console.log(deepCopy3);

// console.log(originalData2);
