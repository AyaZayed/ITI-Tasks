// a company X.
// The company has only one chief executive officer(CEO).The
// application store been some information about the CEO like: name,
//         age and address.You need to find a clean and concise
// implementation of the CEO class in the application.

let instance;

class CEO {
        constructor(name, age, address) {
                if (instance) {
                        throw new Error("It's a singleton!")
                }
                instance = this
                this.name = name
                this.age = age
                this.address = address
        }

        getInstance() {
                return this
        }
}

const ceo = Object.freeze(new CEO("Aya Zayed", 25, "Mansoura"))

class Company {
        constructor() {
                this.ceo = ceo
        }
}

const company = new Company()
const company2 = new Company()

console.log(company2)
