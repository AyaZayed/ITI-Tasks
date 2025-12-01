// **problem 

// class Bird {
//     fly(){
//         console.log('i can fly');
        
//     }
// }

// class Falcon extends Bird {
//     constructor(){
//         super()
//     }
//     fly(){
//         console.log('i can fly');
        
//     }
// }

// class Penguin extends Bird {
//     constructor(){
//         super()
//     }

//     fly(){
//         console.log(' i cannot fly ');
        
//     }
// }

// **solution 

class Bird {
    move(){
        console.log('move');
        
    }
}

class Falcon extends Bird {
    move(){
        console.log('fly')
    }
}


class Benguin extends Bird {
    move(){
        console.log('swim');
        
    }
}

const falcon = new Falcon() 
const penguin = new Benguin()

function makeBirdMove(bird) {
    bird.move()
}

makeBirdMove(falcon)
makeBirdMove(penguin)