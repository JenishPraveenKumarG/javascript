// var a = 2

// //var a = 10

// //impure function

// function addImpure(x){
//     console.log(x+a)
// }

// addImpure(2) // same input but different output due to change in a value

// function addImpure(x){
//     console.log(x+a)
//     a++
// }

// addImpure(2) 
// addImpure(2)


// Pure function

function addPure(x , a){
    console.log(x+a)  // this is also sloghtly impure since it is displaying the output.... pure function must does what it is expected to do
}
addPure(2,3)
addPure(2,3)
addPure(2,3)


// pakka pure function 

function addPure(x , a){
    return a+x
}

console.log(addPure(2,3)) // perfect pure function
