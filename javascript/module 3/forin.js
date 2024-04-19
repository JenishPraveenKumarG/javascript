// forin is used to loop through the properties of the object
// statement of code found within the loop body will be executed once for each property of the object

var colors = {
    primary : 'red',
    secondary : 'green',
    tertiary : 'blue'
}

// syntax

for(var color in colors){
    console.log(color +' -> ' +colors[color])
}

var arr = [1,2,3,4,5,6]

for(var val in arr){
    console.log(val +' -> ' +arr[val])
}