// you need to add every element in an array

let num = [1,2,3,4,5,6,7,8,9]

// let sum = 0

// for(let i = 0; i<num.length ; i++){
//     sum +=  num[i]
// }

// console.log(sum)


// Reduce 

// it returns only single answer

let result = num.reduce(function(acc , value){
    let updatedsum = acc + value
    return updatedsum
} , 0)

console.log(result)


let product = num.reduce(function(acc , val){
    let updatedproduct = acc * val
    return updatedproduct
} , 1)

console.log(product)