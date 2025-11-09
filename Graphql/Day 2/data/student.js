const { validateStudent } = require("../utils/validation");
const { students, enrollments } = require("./db");

function addStd(input, user) {
        if (!user) throw new Error("UNAUTHENTICATED");
        validateStudent(input);
        const newStudent = { id: String(students.length + 1), ...input };
        students.push(newStudent);
        return newStudent;
}

function updateStd(id, input, user) {
        if (!user) throw new Error("UNAUTHENTICATED");
        const student = students.find(student => student.id === id);
        if (!student) {
                throw new Error("Student not found");
        }
        validateStudent(input);
        Object.assign(student, input);
        return student;
}

function deleteStd(id, user) {
        if (!user) throw new Error("UNAUTHENTICATED");
        const student = students.find(std => std.id === id)
        if (!student) return null
        students.splice(students.indexOf(student), 1)

        delete enrollments[id];

        return student
}

module.exports = { addStd, updateStd, deleteStd };