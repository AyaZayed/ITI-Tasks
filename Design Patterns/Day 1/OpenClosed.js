// ! No Solid

class Payment {
        pay(amount, method) {
                if (method === "paypal") {
                        console.log("Paid with paypal");
                } else if (method === "stripe") {
                        console.log("Paid with stripe");
                }
        }
}

const payment = new Payment();
payment.pay(100, "stripe");

// * Solid Open Closed

class PayPalPayment {
        pay(amount) {
                console.log("Paid with PayPal:", amount);
        }
}

class StripePayment {
        pay(amount) {
                console.log("Paid with Stripe:", amount);
        }
}

class Checkout {
        constructor(paymentMethod) {
                this.paymentMethod = paymentMethod;
        }

        process(amount) {
                this.paymentMethod.pay(amount);
        }
}

const checkout = new Checkout(new PayPalPayment());
checkout.process(100);
