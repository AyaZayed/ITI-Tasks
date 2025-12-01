// **problem 

// interface 
// class IHuman {
//     act(){
//      throw new Error('abstract method')
//     }
//      dance(){
//         throw new Error('abstract method')
//      }
//       sing(){
//         throw new Error('abstract method')
//       }
// }

// class Actor extends Human {
//      act(){
//      console.log('acting');
     
//     }
// }
// class Singer extends Human {
//           sing(){
//         console.log('singing');
        
//       }
// }

// const actor1 = new Actor()
// const singer1 = new Singer()

// actor1.act()
// actor1.dance() // error 

// interfaceses
 
class IActor {
    act(){
        throw new Error("abstract method");
        
    }
}

class ISinger {
     sing(){
        throw new Error("abstract method");
        
    }
}

class IDancer {
     dance(){
        throw new Error("abstract method");
        
    }
}

class Musician extends ISinger {
    sing(){
        console.log('can sing');
        
    }
}

const amrDiab = new Musician()

amrDiab.sing()