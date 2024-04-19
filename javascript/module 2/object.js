// objects - unordered collection of key-value pairs

var person = {
    firstname : 'jenish',
    lastname : 'praveen',
    age : 21,
    female : false

}
console.log(person)

// dot notation

console.log(person.age) //21
console.log(person.firstname) // jenish

// bracket notation

var a = person['lastname'] // praveen
console.log(a)
console.log(person['female'])



var cap = {
    firstname : 'Steve',
    lastname : 'Rogers',
    age : 102,
    isAvenger : true,
    friends : ['bucky barners','bruce banner','tony stark'],
    address : {
        state : 'New york',
        city : {
            name : 'brooklyn',
            pincode : 123456
        }
    }
}

console.log(cap.friends[1]) // bruce banner
console.log(cap.address.city.name) // brooklyn

cap.isAvenger = false

console.log(cap)

cap.movies = ['age of ulron','civil war','first avenger']

console.log(cap)

delete cap.age
console.log(cap)

delete cap

console.log(cap)
