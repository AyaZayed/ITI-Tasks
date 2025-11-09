let students = [
        {
                id: "1",
                name: "Ahmed Hassan",
                email: "ahmed@iti.edu",
                age: 22,
                major: "Computer Science",
        },
        {
                id: "2",
                name: "Fatma Ali",
                email: "fatma@iti.edu",
                age: 21,
                major: "Information Systems"
        }
];

let courses = [
        {
                id: "1",
                title: "Data Structures",
                code: "CS201",
                credits: 3,
                instructor: "Dr. Mohamed"
        },
        {
                id: "2",
                title: "Database Systems",
                code: "CS301",
                credits: 4,
                instructor: "Dr. Sarah"
        }
];

let users = [
        {
                id: "1",
                email: "aya@mail.com",
                password: "$2b$10$F8T3hxsCKHwOwBMLIWqBwes3gGWGe2hX/i0f3j2Lue532rckkzHnu"
        },
        {
                id: "2",
                email: "fatma@mail.com",
                password: "$2b$10$F8T3hxsCKHwOwBMLIWqBwes3gGWGe2hX/i0f3j2Lue532rckkzHnu"
        }
]

// Enrollment tracking (studentId -> [courseIds]) 
let enrollments = {
        "1": ["1", "2"],  // Ahmed enrolled in both courses 
        "2": ["2"]        // Fatma enrolled in Database Systems 
};

module.exports = { students, courses, users, enrollments };