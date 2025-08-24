import Shape from "./Shape.js"

export default class Circle extends Shape {
        #radius = 10
        constructor(_radius) {
                super()
                this.Radius = _radius
        }

        get Radius() {
                return this.#radius
        }

        set Radius(r) {
                if (r > 0) {
                        this.#radius = r
                }
        }

        calcArea() {
                return Number((Math.PI * this.Radius ** 2).toFixed(2))
        }
}
