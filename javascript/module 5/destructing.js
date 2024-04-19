// destructing assignment syntax is a javascript expression that makes it possible to unpack values

// from arrays , or properties from objects, into  distinct variables


let arr = ['Hi' , 'I' , 'am' , 'jenish']

// let a = arr[1]
// let b = arr[2]

// console.log(a)
// console.log(b)


let [a,b,c,d,e] = arr

console.log(a)

console.log(e)



// destructing the objects

let myObj = {
    name : 'Adam',
    age : 24,
    gender :'M'
}


// let {f,g,h,i} = myObj   got error

// let{name,age,gender} = myObj

let{name : n,age,gender} = myObj

console.log(n)

console.log(gender)
