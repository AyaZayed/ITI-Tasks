const myFunctions = require('../lab1.js');

describe("Unit Testing Lab", function () {

        // ***** PROBLEM 1: capitalizeTextFirstChar *****

        describe("1. capitalizeTextFirstChar function", function () {

                // Test Case 1: test that the function takes a string it will return type to be a string
                it("should return a string when given a string", function () {
                        const result = myFunctions.capitalizeTextFirstChar("hello world");
                        expect(typeof result).toBe("string");
                });

                // Test Case 2: test that the function takes a string and return it after capitalize it
                it("should return the string with capitalized first letters", function () {
                        const result = myFunctions.capitalizeTextFirstChar("i'm aya zayed");
                        expect(result).toEqual("I'm Aya Zayed");
                });

                // Test Case 3: test if the function takes number it will throw type error says parameter should be string
                it("should throw a TypeError if input is a number", function () {
                        expect(function () {
                                myFunctions.capitalizeTextFirstChar(12);
                        }).toThrowError(TypeError, "parameters should be string");
                });
        });


        // ***** PROBLEM 2: createArray *****

        describe("2. createArray function", function () {

                // Test Case 1: test that the return value of type array
                it("should return a value of type Array", function () {
                        const result = myFunctions.createArray(3);
                        expect(Array.isArray(result)).toBe(true);
                });

                // Test Case 2: test if we pass 2 it will return array of length 2 and test it includes 1
                it("should return array of length 2 and include 1 when passing 2", function () {
                        const result = myFunctions.createArray(2);
                        expect(result.length).toBe(2);
                        expect(result).toContain(1);
                });

                // Test Case 3: test if we pass 3 it will return array of length 3 and test it doesn't include 3
                it("should return array of length 3 and NOT include 3 when passing 3", function () {
                        const result = myFunctions.createArray(3); // returns [0, 1, 2]
                        expect(result.length).toBe(3);
                        expect(result).not.toContain(3);
                });
        });

        // ***** PROBLEM 3: random *****

        describe("3. random function", function () {

                // Test Case 1: test that the return value is a number
                it("should return a number", function () {
                        const result = myFunctions.random(2, 9);
                        expect(typeof result).toBe("number");
                });

                // Test Case 2: test if we pass 5,7 it will return a number >= 5 and <= 7
                it("should return a number between 5 and 7 (inclusive)", function () {
                        const result = myFunctions.random(5, 7);

                        expect(result).toBeGreaterThanOrEqual(5);
                        expect(result).toBeLessThanOrEqual(7);
                });

                // Test Case 3: test if we pass one parameter it will return NaN
                it("should return NaN if only one parameter is passed", function () {
                        const result = myFunctions.random(5);
                        expect(result).toBeNaN();
                });
        });

});