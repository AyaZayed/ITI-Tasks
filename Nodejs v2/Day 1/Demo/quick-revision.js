// const num = 10;
// const str = "Hello World";
// const bool = true;
// const arr = [1, 2, 3, 4, 5];
// const obj = {
//   name: "shady",
//   age: 24,
//   is20TYersOlder: function () {
//     return this.age > 20;
//   },
// };

// const functionName = () => {
//   console.log("Hello World");
// };

// functionName();
// obj.is20TYersOlder();
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.is20TYersOlder());

// /**
//  * 2- Functions
//  *
//  *
//  *
//  */
// // Function Statement
// function func1() {
//   console.log("Hello World");
// }

// // function Expression
// const func2 = function () {
//   console.log("Hello World");
// };

// // Arrow Function
// const func3 = () => {
//   console.log("Hello World");
// };

/**
 * 3- Array Methods
 * map ,filter, reduce
 *
 */

// const arr = [1, 2, 3, 4, 5];

// const dupilcateArr = arr.map((item, index, arr) => {
//   console.log(item, index, arr);
//   return item * 2;
// });

// // console.log(arr);
// // console.log(dupilcateArr);

const filteredArr = dupilcateArr.filter((item) => item >= 6);
// console.log(filteredArr);

// const sum = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);
// console.log(sum);

/**
 * 4- Modern JavaScript (ES6)
 *
 */

// // template literals
// const id = 10;

// let link = `https://www.example.com/paymentLink/${id}`;
// console.log(link);

// const { name, age, city } = {
//   name: "shady",
//   age: 24,
//   email: "shady@gmail.com",
//   city: "mansoura",
//   country: "egypt",
// };

// console.log(name, age, city);

// // spread operator
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const [a, , , , e] = [6, 7, 8, 9, 10];

// const arr3 = [...arr, "shosh", ...arr2];
// console.log(arr3);
// console.log(a, e);

// console.log("5" == 5);
// console.log("5" === 5);

// // primitive and reference types
// const user1 = {
//   name: "shady",
//   age: 24,
//   address: {
//     city: "mansoura",
//     country: "egypt",
//     zip: 12345,
//   },
// };

// const user2 = user1; // shallow copy

// // user2.name = "ahmed";
// // user2.address.city = "cairo";
// // user2.address.zip = 54321;

// // console.log(user1);
// // console.log(user2);
// // ------------------------
// // const user2 = { ...user1 }; // deep copy > 1lvl deep

// // const user2 = JSON.parse(JSON.stringify(user1));

// // user2.name = "ahmed";
// // user2.address.city = "cairo";
// // user2.address.zip = 54321;

// console.log(user1);
// console.log(user2);
// console.log(user2 === user1);

/**
 * higher order functions
 * function that takes a function as an argument or returns a function
 */

const middleware = (userType) => {
  return () => {
    if (userType === "admin") {
      console.log("admin");
    } else {
      console.log("user");
    }
  };
};

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((item) => item * 2);
