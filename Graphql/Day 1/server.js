const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// In-memory data storage 
let students = [
        {
                id: "1",
                name: "Ahmed Hassan",
                email: "ahmed@iti.edu",
                age: 22,
                major: "Computer Science"
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

// Enrollment tracking (studentId -> [courseIds]) 
let enrollments = {
        "1": ["1", "2"],  // Ahmed enrolled in both courses 
        "2": ["2"]        // Fatma enrolled in Database Systems 
};

// ============= TODO: DEFINE YOUR SCHEMA HERE ============= 
const typeDefs = gql` 
  type Student { 
    id:ID!,
    name:String!,
    email:String!,
    age:Int!,
    major:String
    courses: [Course!]
  } 

  type Course{
        id:ID!,
        title: String!,
        code: String!,
        credits: Int!,
        instructor: String!
        students: [Student!]
  }

  type Enrollment{
        studentId: ID!,
        courseId: ID!
  }

  type Query{
        getAllStudents: [Student!]!
        getStudent (id:ID!): Student
        getAllCourses: [Course!]!
        getCourse (id:ID!): Course!
        searchStudentsByMajor(major: String!): Student
  }

  input StudentInput{
        name: String!,
        email: String!,
        age: Int!,
        major: String!
  }

  input StudentUpdate{
        id: ID!
        name: String,
        email: String,
        age: Int,
        major: String
  }

  input CourseInput{
        title: String!,
        code: String!,
        credits: Int!,
        instructor: String!
  }

  input CourseUpdate{
        id: ID!
        title: String,
        code: String,
        credits: Int,
        instructor: String
  }

  type Mutation{
        addStudent (input: StudentInput!): Student
        updateStudent (input: StudentUpdate!): Student
        deleteStudent(id: ID!): Student
        addCourse (input: CourseInput!): Course
        updateCourse (input: CourseUpdate!): Course
        deleteCourse(id: ID!): Course
        enrollStudent (studentId: ID!, courseId: ID!): Enrollment
  }


`;

// ============= TODO: IMPLEMENT YOUR RESOLVERS HERE =============

const resolvers = {
        Query: {
                getAllStudents: () => students,
                getStudent: (_, { id }) => students.find(student => student.id === id),
                getAllCourses: () => courses,
                getCourse: (_, { id }) => courses.find(course => course.id === id),
                searchStudentsByMajor: (_, { major }) => students.find(student => student.major === major)
        },

        Mutation: {
                addStudent: (_, { input }) => {
                        const newStudent = { id: String(students.length + 1), ...input };
                        students.push(newStudent);
                        return newStudent;
                },

                updateStudent: (_, { input }) => {
                        const { id } = input;
                        const student = students.find(student => student.id === id);
                        if (!student) {
                                return null;
                        }
                        Object.assign(student, input);
                        return student;
                },

                deleteStudent: (_, { id }) => {
                        const student = students.find(std => std.id === id)
                        if (!student) return null
                        students.splice(students.indexOf(student), 1)
                        return student
                },

                addCourse: (_, { input }) => {
                        const newCourse = { id: String(courses.length + 1), ...input };
                        courses.push(newCourse);
                        return newCourse;
                },

                updateCourse: (_, { input }) => {
                        const { id } = input;
                        const course = courses.find(course => course.id === id);
                        if (!course) {
                                return null;
                        }
                        Object.assign(course, input);
                        return course;
                },

                deleteCourse: (_, { id }) => {
                        const course = courses.find(std => std.id === id)
                        if (!course) return null
                        courses.splice(courses.indexOf(course), 1)
                        return course
                },

                enrollStudent: (_, { studentId, courseId }) => {
                        if (!enrollments[studentId]) {
                                enrollments[studentId] = [];
                        }
                        enrollments[studentId].push(courseId);
                        return { studentId, courseId };
                }
        },

        Student: {
                courses: (parent) => {
                        const courseIds = enrollments[parent.id] || [];
                        return courses.filter(course => courseIds.includes(course.id));
                },
        },

        Course: {
                students: (parent) => {
                        return students.filter(student => {
                                const studentCourses = enrollments[student.id] || [];
                                return studentCourses.includes(parent.id);
                        });
                },
        },
};

// ============= SERVER SETUP (DO NOT MODIFY) =============
async function start() {
        const app = express();
        const server = new ApolloServer({
                typeDefs: typeDefs,
                resolvers: resolvers,
        });

        await server.start();
        server.applyMiddleware({ app, path: "/graphql" });

        app.listen(5000, () => {
                console.log("App Running on http://localhost:5000/graphql");
        });
}

start();