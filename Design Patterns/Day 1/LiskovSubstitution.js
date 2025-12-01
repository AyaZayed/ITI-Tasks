// ! No Solid

class Vehicle {
        move() {
                console.log('I can move');
        }

        fly() {
                console.log('I can fly');
        }

        swim() {
                console.log('I can swim');
        }
}

class Plane extends Vehicle {
        fly() {
                console.log('I can fly');
        }
}

const vehicle = new Vehicle();
const plane = new Plane();

plane.swim();

// * Solid Liskov Substitution

class VehicleSolid {
        move() {
                console.log('I can move');
        }
}

class PlaneSolid extends VehicleSolid {
        move() {
                console.log('I can fly');
        }
}

class BoatSolid extends VehicleSolid {
        move() {
                console.log('I can swim');
        }
}

const vehicleSolid = new VehicleSolid();
const planeSolid = new PlaneSolid();
const boatSolid = new BoatSolid();

planeSolid.move();
boatSolid.move();
