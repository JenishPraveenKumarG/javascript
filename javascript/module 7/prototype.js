// let myObj = {}

// console.log(myObj)


// let person1 = {
//     name : 'jenish',
//     age : 25
// }

// // console.log(person1.hasOwnProperty('name'))

// console.log(person1.hasOwnProperty('gender'))



function person(_name , _age){
    this.name = _name
    this.age = _age
    // this.getNameandAge = function(){
    //     console.log(`My na is ${this.name} and my age is ${this.age}`)
    // }


}

person.prototype.getNameandAge = function(){
    console.log(`My na is ${this.name} and my age is ${this.age}`)
}


let person2 = new person('jpk' , 21)

let person3 = new person('kumar' , 22)

console.log(person2)