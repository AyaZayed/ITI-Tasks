// **problem 

// class AreaCalculator {
//     calculate(shape){
//         if (shape.type == 'circle') {
//                 return Math.PI * shape.radius * shape.radius
//         }
//         else if (shape.type == 'square'){
//             return shape.side * shape.side
//         }
//     }
// }


// const area = new AreaCalculator()

// const circle = area.calculate({type:'circle',radius: 5})
// const square = area.calculate({type:'square',side: 15})



// **solution

class Shape {
    area(){
       throw new Error("abstract method ");
            
    }
}

class Circle extends Shape {
    constructor(radius){
        super(radius)
        this.radius = radius
    }

     area(){
       return Math.PI * this.radius * this.radius
            
    }
}


class Square extends Shape {
    constructor( side){
        super();
        this.side = side ;
    }

    area(){
        return this.side * this.side 
    }
}

class AreaCalculator {
    calculate(shape){
        return shape.area()
    }
}

const areaClac = new AreaCalculator()

console.log('circle',areaClac.calculate(new Circle(10)));
console.log('square',areaClac.calculate(new Square(15)));
