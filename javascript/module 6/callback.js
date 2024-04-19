// function that is passed as an argument to the another function is known as call back function



// normal function


// function printFirstName(firstName){
//     console.log(firstName)
// }

// printFirstName('Jenish')


// function printLastName(lastname){
//     console.log(lastname)
// }

// printLastName('kumar')



// callback function


// function printFirstName(firstName,cb){
//     console.log(firstName)
//     cb('kumar')
// }

// printFirstName('Jenish',printLastName) // callback


// function printLastName(lastname){
//     console.log(lastname)
// }




// 



const iseven =(n) =>{
    return n%2 == 0
}

let printresult = (Evenfn , num) =>{
    const isNUmEven = Evenfn(num)

    console.log(`the number ${num} is an Even Number ${isNUmEven}`)
}

printresult(iseven,16)


