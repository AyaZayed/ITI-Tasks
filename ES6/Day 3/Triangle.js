import Shape from "./Shape.js"

export default class Triangle extends Shape {
        constructor(_width, _height) {
                super(_width, _height)
        }

        calcArea() {
                return 0.5 * this.Width * this.Height
        }
}
