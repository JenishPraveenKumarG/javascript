// we will be given a number and we have to check if the square of the number is even or not

//Imperative way of writing a code


const a = 4

const aSquare = a*a

let isEven

if(aSquare % 2 == 0){
    isEven = true
}  

else{
    isEven = false
}

console.log(isEven)

// Declarative way of writting code


const checkforSquare = (x)=>(x*x % 2 == 0 ? true : false)

console.log(checkforSquare(5))