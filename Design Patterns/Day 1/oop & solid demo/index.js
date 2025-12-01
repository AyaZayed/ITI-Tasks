// class

// class Animal {
//     constructor(name ,sound){
//         this.name = name ;
//         this.sound = sound ;
//     }

//     // instane
//     makeSound(){
//         console.log('make sound');

//     }
// }

// var dog = new Animal('dog','bark')

// dog.makeSound()

// encapsulation > private/ protected variable

class BankAccount {
  #balance = 0;

  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposite(30);

console.log(account.getBalance());

// inhertance

// class Animal {
//     constructor(name , sound){
//             this.name = name
//             this.sound  = sound
//     }

//     eating(){
//         console.log(`${this.name} is eating `);

//     }
// }

// class Dog extends Animal {
//     constructor(name,sound,drink){
//         super(name,sound)
//         this.drink = drink
//     }

//     drinking (){
//         console.log(`${this.name} is drinking`);

//     }

//     bark (){
//         console.log(this.sound);

//     }
// }

// const dog1 = new Dog('dog','bark','water')

// dog1.eating()

// polymorphism (overrid - overload)

class Animal {
  // override
  makeSound() {
    console.log("animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("dog sound");
  }
}
const dog = new Dog();

// overload
class Calculate {
  add(a, b, c = 0) {
    return a + b + c;
  }
}

const clac = new Calculate()
clac.add(2,4)

console.log(clac.add(2,4));


// static method 
 
// class  Clac{
//     static add (a,b){
//         return a+b 
//     }
// }

// Clac.add(4,5)


// // static var 

// class Car {
//     static numOfCar = 0;
//     constructor(){
//         Car.numOfCar ++
//     }
// }


// const car1 = new Car()
// const car2 = new Car()
// const car3 = new Car()
// const car4 = new Car()

// console.log(Car.numOfCar);

// abstraction

// class Vehicle {
//     constructor(){
//         console.log(this.constructor);
//         console.log(Vehicle);

//         if (this.constructor === Vehicle) {
//             throw new Error("abstract class cannot be instantiated"); // stop excution
            
//         }
//     }
//     play(){
//         throw new Error("abstract method not implemnted");
        
//     }

//     run(){
//         console.log('run');
        
//     }
// }

// const vehicle1 = new Vehicle()


// final class 

class Car {

    constructor(name){
        this.name = name 
        console.log(new.target);
        console.log(this.constructor);
        
        if (new.target !== Car) {
            throw new Error('this is final class cannot be extended')
        }
    }

    getType(){
        console.log(this.name);
        
    }
}

class Bmw extends Car {
    constructor(name){
        super(name)
    }
}

// const car1 = new Car('bmw')
// car1.getType()

const bmw1 = new Bmw() // give me error

//final var
// final method