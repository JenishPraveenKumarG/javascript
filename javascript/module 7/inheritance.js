class Person{

    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }
}

class Teacher extends Person{
    constructor(_name , _age, _classstrength){

        super(_name,_age)
        this.classstrength = _classstrength
    }
}

class Student extends Person{
    constructor(_name , _age, _cgpa){

        super(_name,_age)
        this.cgpa = _cgpa

}
}


let Person1 = new Person('Adam' , 20)


console.log(Person1)


let teach = new Teacher('Mark' , 50 , 100)

console.log(teach)


let student = new Student('Mark' , 50 , 10.0)

console.log(student)