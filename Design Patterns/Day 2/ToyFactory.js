// 3 - In this problem, you need to implement a factory ToyFactory that can create a toy duck and a toy car object using either the ToyDuck or ToyCar function constructor.

// 	 A ToyDuck object should have the following properties:

// color

// price

// 	A ToyCar object should have the following properties:

// color

// price

// name

class ToyCar {
        constructor(color, price, name) {
                this.color = color
                this.price = price
                this.name = name
        }
}

class ToyDuck {
        constructor(color, price) {
                this.color = color
                this.price = price
        }
}

class ToyFactory {
        static createToy(type, options) {
                switch (type) {
                        case "duck":
                                return new ToyDuck(options.color, options.price);
                        case "car":
                                return new ToyCar(options.color, options.price, options.name);
                        default:
                                throw new Error("Unknown toy type");
                }
        }
}

const duck = ToyFactory.createToy("duck", { color: "yellow", price: 10 });
const car = ToyFactory.createToy("car", { color: "red", price: 50, name: "Car name" });

console.log(duck);
console.log(car);  
