// 90 to 100 - A
// 70 to 89 - B
// 50 to 69 - c
// lower than 50 - fail

var studentScore = 49

if(studentScore > 90){

    console.log('Student scored a A grade')
}
else if(studentScore >= 70 && studentScore <=89){
    console.log('Student scored a B grade')
}
else if(studentScore >= 50 && studentScore <=69){
    console.log('Student scored a C grade')
}
else {
    console.log('Sorry Student failed')
}