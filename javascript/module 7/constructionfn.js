// let car1 = {
//     name : 'X4',
//     company : 'BMW',
//     color : 'Red'
// }

// let car2 = {
//     name : 'S-class',
//     company : 'Mercedes',
//     color : 'white'
// }

function createcar(_name, _company , _color){
    this.name = _name
    this.company = _company
    this.color = _color


    this.drive = function(){
        console.log(`I am driving ${this.name} and it is of ${this.color} color`)
    }
}

let car1 = new createcar('X4' , 'BMW' , 'Red')

let car2 = new createcar('S-class' , 'audi' , 'black')

console.log(car1)

console.log(car2)


car1.drive()