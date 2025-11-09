const { gql } = require('apollo-server-express');

const typeDefs = gql` 
  type Student { 
    id:ID!,
    name:String!,
    email:String!,
    age:Int!,
    major:String
    courses: [Course!]
    coursesCount: Int!
  } 

  type Course{
        id:ID!,
        title: String!,
        code: String!,
        credits: Int!,
        instructor: String!
        students: [Student!]
        studentsCount: Int!
  }

  type Enrollment{
        studentId: ID!,
        courseId: ID!
  }

  type User{
         id:ID!,
         email: String!,
         password: String!
  }

  type AuthPayload{
        token: String!,
        user: User!
  }

  type Query{
        getAllStudents(filter: StudentFilter, options: ListOptions): [Student!]!
        getStudent (id:ID!): Student
        getAllCourses(filter: CourseFilter, options: ListOptions): [Course!]!
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
        title: String,
        code: String,
        credits: Int,
        instructor: String
  }

  input ListOptions{
        limit: Int, 
        offset: Int, 
        sortBy: String, 
        sortOrder: String 
  } 

  input StudentFilter{ 
        major: String, 
        nameContains: String, 
        emailContains: String, 
        minAge: Int, 
        maxAge: Int 
  } 

  input CourseFilter{ 
        codePrefix: String, 
        titleContains: String, 
        instructor: String, 
        minCredits: Int, 
        maxCredits: Int 
  }

  type Mutation{
        addStudent (input: StudentInput!): Student
        updateStudent (id: ID!, input: StudentUpdate!): Student
        deleteStudent(id: ID!): Student

        addCourse (input: CourseInput!): Course
        updateCourse(id: ID!, input: CourseUpdate!): Course
        deleteCourse(id: ID!): Course

        enrollStudent (studentId: ID!, courseId: ID!): Enrollment
        unenrollStudent (studentId: ID!, courseId: ID!): Enrollment

        signup(email: String!, password: String!): AuthPayload!
        login(email: String!, password: String!): AuthPayload!

  }
`;

module.exports = typeDefs;