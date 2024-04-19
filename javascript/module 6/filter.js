// you have to check for even number in an array and put them in seperate array

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// let num = []

// for(var i = 0; i<numbers.length ; i++){
//     if(numbers[i]%2 == 0){
//         num.push(numbers[i])
//     }
// }
// console.log(num)



// filter : it creates a new array and reture all the elements that satisfies the condition

// if condition satisfied by the element it will take that or else it will discard the element

let numbers = [1,2,3,4,5,6,7,8,9,10]

let even = numbers.filter(function(n){
    return n%2 == 0
})

console.log(even)


let number1 = [-1,1,-2,2,-3,3,-4,4]

const pos = number1.filter((x)=>{
    return x>0
})

console.log(pos)