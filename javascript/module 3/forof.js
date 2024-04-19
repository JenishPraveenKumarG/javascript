// it creates a loop iterating over the iterable objects
// including : built in sting, arrays, arrays like nodelist also map and set


// difference between forof and forin is that for in carries the index or key whereas for of carries only the values



var scores = [60,70,80,90]

// syntax

for(var score of scores){
    console.log(score)
}

// method entries() used to print the index in for of loop

let color = ['red', 'green', 'blue']
for(var [index , col] of color.entries()){
    console.log(index +' -> ' +col)
}


// Stringd

var str = 'jenish'

for(var c of str){
    console.log(c)
}


