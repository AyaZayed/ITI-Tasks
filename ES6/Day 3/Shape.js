export default class Shape {
        #width = 10
        #height = 10

        constructor(_width, _height) {
                if (new.target === Shape) {
                        throw new Error('Cannot call shape')
                }
                this.Width = _width
                this.Height = _height
        }

        get Width() {
                if (new.target === Circle) {
                        throw new Error('Circles have no width')
                }
                return this.#width
        }

        set Width(w) {
                if (new.target === Circle) {
                        throw new Error('Circles have no width')
                }
                if (w > 0) {
                        this.#width = w
                }
        }

        get Height() {
                if (new.target === Circle) {
                        throw new Error('Circles have no height')
                }
                return this.#height
        }

        set Height(h) {
                if (new.target === Circle) {
                        throw new Error('Circles have no height')
                }
                if (h > 0) {
                        this.#height = h
                }
        }

        calcArea() {
                return 0
        }
}