console.log(a) // we will get undefined 
name() // this will get executed as it is a function
add(2,4) // since add is a variable its undefined so we get error

var a = 'hi'

function name(){
    console.log('jenish')
}

// console.log(a)
// name()


var add = function(a,b){
    console.log(a+b)
}
// add(2,4)