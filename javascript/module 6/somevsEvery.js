//some method

//some : condition check : to get true or false based on a condition

// it will return true if even 1 element satisfies the condition

const transaction = [-100,-888,-900,-5999,-5000]

let result = transaction.some(function(x){
        return x <0
})

console.log(result)



// Every : every element should satisfy the condition

let result1 = transaction.every(function(x){
    return x <0
})

console.log(result1)