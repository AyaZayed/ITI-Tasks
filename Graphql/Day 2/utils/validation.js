
function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
}

function validateStudent(student) {
        if (student.age < 16) throw new Error("Student age must be at least 16");
        if (!isValidEmail(student.email)) throw new Error("Invalid email format");
}

function validateCourse(course,) {
        if (course.credits < 0 || course.credits > 6) throw new Error("Credits must be between 0 and 6");
}

module.exports = { isValidEmail, validateStudent, validateCourse };