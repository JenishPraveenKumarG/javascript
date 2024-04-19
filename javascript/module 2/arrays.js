// arrays provide you ordered collection


var arr = [1,'jen', true, 12.3]
console.log(arr)


// accessing the elements

var a = arr[1]
console.log(a)

//replacing elements

arr[1] = 'praveen'
console.log(arr)


console.log('The length of the array is',arr.length)


//inbuit js array methods

var arr2 = [1, 2, 3, 4, 5]


// pop methods - remove last element in an array

arr2.pop()
console.log('Popped array',arr2)

// push methods - add element to the last of the array

arr2.push(5)
console.log('pushed array',arr2)

// shift method - remove first element in an array

var a = arr2.shift()
console.log(a)
console.log('shifted array',arr2)

// unshift method - add element to the first place in ana array

arr2.unshift(100)
console.log('unshifted array',arr2)