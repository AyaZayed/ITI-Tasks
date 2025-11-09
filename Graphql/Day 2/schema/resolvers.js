const { signup, login } = require("../auth/auth");
const { addCrs } = require("../data/course");
const { students, courses, enrollments } = require("../data/db");
const { addStd, updateStd } = require("../data/student");

const resolvers = {
        Query: {
                getAllStudents: (_, { filter, options }) => {
                        let result = filterStudents(students, filter);
                        return sortAndPaginate(result, options);
                },
                getStudent: (_, { id }) => students.find(student => student.id === id),
                getAllCourses: (_, { filter, options }) => {
                        let result = filterCourses(courses, filter);
                        return sortAndPaginate(result, options);
                },
                getCourse: (_, { id }) => courses.find(course => course.id === id),
                searchStudentsByMajor: (_, { major }) => students.find(student => student.major === major)
        },

        Mutation: {
                addStudent: (_, { input }, { user }) => addStd(input, user),

                updateStudent: (_, { id, input }, { user }) => updateStd(id, input, user),

                deleteStudent: (_, { id }, { user }) => deleteStd(id, user),

                addCourse: (_, { input }, { user }) => addCrs(input, user),

                updateCourse: (_, { id, input }, { user }) => updateCrs(id, input, user),

                deleteCourse: (_, { id }, { user }) => deleteCrs(id, user),

                enrollStudent: (_, { studentId, courseId }, { user }) => enrollStd(studentId, courseId, user),

                unenrollStudent: (_, { studentId, courseId }, { user }) => unenrollStd(studentId, courseId, user),

                signup: async (_, { email, password }) => await signup(email, password),

                login: async (_, { email, password }) => await login(email, password),
        },

        Student: {
                courses: (parent) => {
                        const courseIds = enrollments[parent.id] || [];
                        return courses.filter(course => courseIds.includes(course.id));
                },

                coursesCount: (parent) => {
                        const courseIds = enrollments[parent.id] || [];
                        return courseIds.length;
                },
        },

        Course: {
                students: (parent) => {
                        return students.filter(student => {
                                const studentCourses = enrollments[student.id] || [];
                                return studentCourses.includes(parent.id);
                        });
                },

                studentsCount: (parent) => {
                        return students.filter(student => {
                                const studentCourses = enrollments[student.id] || [];
                                return studentCourses.includes(parent.id);
                        }).length;
                },
        },
};

module.exports = resolvers;