// find returns the first element of the array that satisfies the condition

const transaction = [100,888,900,-5999,5000]

let first = transaction.find((n) =>{
    return n<0
})

console.log(first)


// find Index - used to find the index of the answer

const transaction1 = [100,888,900,-5999,5000]

let first1 = transaction1.findIndex(function(n){
    return n<0
})

console.log(first1)