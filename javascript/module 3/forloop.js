// loops are the statement that we use to control a flow of the program and to do some repeatative works

var a = "hello world"

// pint the value of a 5 times

// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)
// console.log(a)

// using for loop

for(var i = 0 ; i<5 ; i++){
    console.log(a)
}

// you have an array and you have to square each element in the array


var num = [1,2,3,4,5,6,7,8,9]
var squaredArr = []
for(var i = 0 ; i<num.length ; i++){
    squaredArr.push(num[i]*num[i])
}
console.log(squaredArr)
