// product
class House {
        constructor() {
                this.size = null
                this.stories = 1
                this.swimmingPool = false
                this.guestHouse = false
                this.garden = false
        }
}

// builder

class HouseBuilder {
        constructor(size, stories) {
                this.house = new House()
                this.house.size = size
                this.house.stories = stories
        }

        addPool() {
                this.house.swimmingPool = true
                return this
        }

        addGarden() {
                this.house.garden = true
                return this
        }

        addGuestHouse() {
                this.house.guestHouse = true
                return this
        }

        build() {
                return this.house
        }
}

const house = new HouseBuilder('200m', 2)

house.addGarden().build()

console.log(house)