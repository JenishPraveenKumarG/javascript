// using encapsulation we can make the access of the variable within a block


function person(_name, _age){
        this.name = _name
        this.age = _age

}

let person1 = new person("Jenish" , 29)

person1.name = 'kumar'

console.log(person1)



function personn(_name, _age){
    var name = _name
    this.age = _age

    this.getName = function(){
        return name
    }

}

let person2 = new personn("Jenish" , 29)



console.log(person2)

console.log(person2.getName())