let arr = [
    {name : 'A' , age : 15 , gender : 'M'},
    {name : 'B' , age : 16 , gender : 'F'},
    {name : 'C' , age : 18 , gender : 'M'},
    {name : 'D' , age : 20 , gender : 'F'},
    {name : 'E' , age : 12 , gender : 'M'},
    {name : 'F' , age : 55 , gender : 'F'},
    {name : 'G' , age : 48 , gender : 'M'}
]

// Age of all mens

// let males = arr.filter(function(obj){
//     return obj.gender == 'M'
// })

// let ageofmales = males.map(function(male){
//     return male.age
// })

// console.log(males)
// console.log(ageofmales)


// using chaining

let maleages = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(male){
    return male.age
})

console.log(maleages)