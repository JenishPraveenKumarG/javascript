var a = 21


var a = 35  // redclaration which is not allowed in java and c++

console.log(a)



if(a === 35){
    var b = 40
    console.log(b)
}

console.log(b) // can access

// variables declared with var keyword are not blocked scope they are function scoped


function test(){
    var c = 100
    console.log(c)
}

test()

console.log(c) // cant access