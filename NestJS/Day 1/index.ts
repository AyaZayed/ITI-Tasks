// // class User {
// //   constructor(public name: string, protected age: number) {}
// // }

// // const user = new User("John", 20);
// // console.log(user.name);
// // console.log(user.age);

// /// inheritance

// // class Animal {
// //   constructor(public name: string) {}
// //   move(distance: number): void {
// //     console.log(`${this.name} moved ${distance} meters`);
// //   }
// // }

// // class Dog extends Animal {
// //   bark(): void {
// //     console.log("Woof! Woof!");
// //   }
// // }

// // const dog = new Dog("Buddy");
// // dog.move(10);
// // dog.bark();

// ////////////////// interfaces //////////////////

// // interface ICar {
// //   brand?: string;
// //   model: string;
// //   year: number;
// //   color: string;
// //   speed: number;
// //   accelerate(): void;
// //   brake(): void;
// // }

// // class Tesla implements ICar {
// //   brand: string = "Tesla";
// //   speed: number = 0;
// //   constructor(
// //     public model: string,
// //     public year: number,
// //     public color: string
// //   ) {}

// //   accelerate(): void {
// //     this.speed += 10;
// //   }

// //   brake(): void {
// //     this.speed -= 10;
// //   }
// // }

// // const tesla = new Tesla("Model S", 2020, "Red");
// // tesla.accelerate();
// // console.log(tesla.speed);
// // tesla.brake();
// // console.log(tesla.speed);

// ////////////////// decorators //////////////////

// // function Logger(target: Function) {
// //   console.log(`an instance of ${target.name} was created`);
// // }

// // @Logger
// // class User {
// //   constructor(public name: string) {}
// // }

// // const user = new User("shady");

// //////////////////  dependency injection //////////////////

// interface IDatabase {
//   getUsers(): void;
// }

// class MySQLDatabase implements IDatabase {
//   getUsers(): void {
//     console.log("Getting users from the database");
//   }
// }

// class PostgreSQLDatabase implements IDatabase {
//   getUsers(): void {
//     console.log("Getting users from the database");
//   }
// }
// class UserService {
//   constructor(private db: IDatabase) {}

//   getUsers(): void {
//     this.db.getUsers();
//   }
// }
