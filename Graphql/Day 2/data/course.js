const { validateCourse } = require("../utils/validation");
const { courses } = require("./db");

const addCrs = (input, user) => {
        if (!user) throw new Error("UNAUTHENTICATED");
        validateCourse(input);
        const existingCourse = courses.find(c => c.code.toLowerCase() === input.code.toLowerCase());
        if (existingCourse) throw new Error("Course with this code already exists");

        const newCourse = { id: String(courses.length + 1), ...input };
        courses.push(newCourse);
        return newCourse;
}

const updateCrs = (id, input, user) => {
        if (!user) throw new Error("UNAUTHENTICATED");
        const course = courses.find(course => course.id === id);
        if (!course) {
                throw new Error("Course not found");
        }
        validateCourse(input);
        const existingCourse = courses.find(c => c.code.toLowerCase() === input.code.toLowerCase());
        if (existingCourse) throw new Error("Course with this code already exists");

        Object.assign(course, input);
        return course;
}

const deleteCrs = (id, user) => {
        if (!user) throw new Error("UNAUTHENTICATED");
        const course = courses.find(std => std.id === id)
        if (!course) return null
        courses.splice(courses.indexOf(course), 1)

        for (let studentId in enrollments) {
                enrollments[studentId] = enrollments[studentId].filter(cId => cId !== id);
        }
        return course
}

module.exports = { addCrs, updateCrs, deleteCrs }