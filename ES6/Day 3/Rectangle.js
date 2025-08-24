import Shape from "./Shape.js"

export default class Rectangle extends Shape {
        constructor(_width, _height) {
                super(_width, _height)
        }

        calcArea() {
                return this.Width * this.Height
        }
}
