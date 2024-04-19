// ordinary methods

let arr = [1 , 2 , 3 , 4 , 5]

let squareArr = []

for(var i = 0; i<arr.length ; i++){
    squareArr.push(arr[i]*arr[i])
}

console.log(squareArr)


// map

// map will loop through every element of your array and will perform specific operations that you provide

// It always return new array as answer 

let num = [1 , 2 , 3 , 4 , 5]

const SquareNUm = num.map(function(n){
    return n*n
}
)

console.log(SquareNUm)



const transaction = [100,888,900,-5999,5000]

const InrTodollars = 80

const transactionIndollar = transaction.map((amount) =>{
    return (amount/InrTodollars).toFixed(0)
})

console.log(transactionIndollar)