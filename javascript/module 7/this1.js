// non strict mode in node js

//normal console

console.log(this) // empty object


// this inside a  function


function display(){
    console.log(this)  // global object
}

display()


// this inside obj + fn

let myObj = {
    name : 'Jenish',
    age : 23,
    myfn : function(){
        // console.log(this)
        console.log(this.name)
    }
}
myObj.myfn()   // object itself


// obj + fn + fn



let myObj1 = {
    name : 'Jenish',
    age : 23,
    myfn2 : function(){
        // console.log(this)
        
        function myfn1(){
            console.log(this)
        }
        myfn1()

    }
}
myObj1.myfn2() // global object


