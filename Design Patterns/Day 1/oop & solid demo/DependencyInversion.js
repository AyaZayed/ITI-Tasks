// **problem 

// low level module (details)
// class LightBulb {
//     turnOn (){
//         console.log('lightBulb is on ');
        
//     }
// }


// // high level module 
// class Switch {
//     constructor(){
//         this.LightBulb = new LightBulb()
//     }

//     opreate(){
//         this.LightBulb.turnOn()
//     }
// }

// const switchBtn = new Switch()

// switchBtn.opreate()


// **solution 

// create share abstraction (interface)

class Device {
    turnOn(){
        throw new Error("abstract method");
        
    }
}


// low level module 

class LightBulb extends Device {
    turnOn(){
        console.log(' lightBulb is on ')
    }
}

// low level module 

class Fan extends Device {
    turnOn(){
        console.log(' fan is on');
        
    }
}


// high level module depend on abstraction 

class Switch {
    constructor(device){
        this.device = device 
    }

    opreate (){
        this.device.turnOn()
    }
}

const fan = new Fan()
const lightBulb = new LightBulb()

const switchForLightBulb = new Switch(lightBulb)

switchForLightBulb.opreate() // lightbulb is on 

const switchForFan = new Switch(fan)
switchForFan.opreate() // fan is on 