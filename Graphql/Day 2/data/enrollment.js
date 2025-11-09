const { students, courses, enrollments } = require("./db");

const enrollStd = (studentId, courseId, user) => {
        if (!user) throw new Error("UNAUTHENTICATED");

        const student = students.find(s => s.id === studentId);
        if (!student) {
                throw new Error("Student not found");
        }

        const course = courses.find(c => c.id === courseId);
        if (!course) {
                throw new Error("Course not found");
        }

        if (!enrollments[studentId]) {
                enrollments[studentId] = [];
        }

        if (!enrollments[studentId].includes(courseId)) {
                enrollments[studentId].push(courseId);
        }

        return student;
}

const unenrollStd = (studentId, courseId, user) => {
        if (!user) throw new Error("UNAUTHENTICATED");

        const student = students.find(s => s.id === studentId);
        if (!student) {
                throw new Error("Student not found");
        }

        const course = courses.find(c => c.id === courseId);
        if (!course) {
                throw new Error("Course not found");
        }

        if (enrollments[studentId]) {
                enrollments[studentId] = enrollments[studentId].filter(cId => cId !== courseId);
        }

        return student;
}

module.exports = { enrollStd, unenrollStd };