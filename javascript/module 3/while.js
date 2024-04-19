// a while loop ealuates condition inside paranthasis ()
// if condition is true then the code inside the while loop will get executed
// The condition is evaluated ahain until the condition is false

// syntax

var a = 5
while(a<10){
    console.log(a) // 5 6 7 8 9
    a++
}


// do while loop - do block executed after that the while block is checked

var a = 5
do{
    console.log(a)  // executed block
}
while(a>=10){   // condition false
    console.log(a);
    a++;
}

