 class Person{
    constructor(_name , _age){
        this.name = _name
        this.age = _age
    }



    welcome(){
        console.log(`Welcome ${this.name}`)
    }
 }


 let person1 = new Person('adam' , 18)

 console.log(person1)

 let person2 = new Person('steve' , 18)


let person3 = new Person('jobs' , 18)


console.log(person2)

console.log(person3)


person1.welcome()



