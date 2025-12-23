const User = require('../lab2.js');

describe("User Class Testing", function () {

        let user;
        beforeEach(function () {
                user = new User("Aya", "password123");
        });

        //* 1. Test addToCart logic

        describe("addToCart function", function () {
                it("should add a product object to the cart array", function () {
                        const product = { name: "Laptop", price: 10000 };

                        user.addToCart(product);

                        expect(user.cart.length).toBe(1);
                        expect(user.cart).toContain(product);
                });
        });

        //* 2. Test calculateTotalCartPrice logic

        describe("calculateTotalCartPrice function", function () {
                it("should return the sum of prices of all products in the cart", function () {
                        user.addToCart({ name: "Mouse", price: 100 });
                        user.addToCart({ name: "Keyboard", price: 200 });
                        user.addToCart({ name: "Monitor", price: 1000 });

                        const total = user.calculateTotalCartPrice();

                        expect(total).toBe(1300);
                });

                it("should return 0 if the cart is empty", function () {
                        const total = user.calculateTotalCartPrice();
                        expect(total).toBe(0);
                });
        });


        //* 3. Test checkout function 

        describe("checkout function", function () {
                let paymentModelMock;

                beforeEach(function () {
                        paymentModelMock = jasmine.createSpyObj("paymentModel", [
                                "goToVerifyPage",
                                "returnBack",
                                "isVerify"
                        ]);
                });

                // Test case 1: paymentModel methods should be called
                it("should call the methods of the paymentModel", function () {
                        paymentModelMock.isVerify.and.returnValue(true);

                        user.checkout(paymentModelMock);

                        expect(paymentModelMock.goToVerifyPage).toHaveBeenCalled();
                        expect(paymentModelMock.returnBack).toHaveBeenCalled();
                        expect(paymentModelMock.isVerify).toHaveBeenCalled();
                });

                // Test case 2: should return true if the payment is verified
                it("should return true if isVerify returns true", function () {
                        paymentModelMock.isVerify.and.returnValue(true);
                        const result = user.checkout(paymentModelMock);
                        expect(result).toBe(true);
                });

                // Extra: Test failure case
                it("should return false if isVerify returns false", function () {
                        paymentModelMock.isVerify.and.returnValue(false);

                        const result = user.checkout(paymentModelMock);

                        expect(result).toBe(false);
                });
        });

});