import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Shape from "./Shape.js";

let rect = new Rectangle(20, 30)
let circle = new Circle(5)
let triangle = new Triangle(3, 4)

const shapes = [rect, circle, triangle]

shapes.forEach((shape) => {
        console.log(shape.calcArea())
})

let shape = new Shape(1, 2)
console.log(shape);
