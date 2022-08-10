// If you are asked to fulfill two conditions and you have to fulfill both of them can you check it? Similarly can you fulfill either one of the conditions? Write a code to to check it if you can. (Use && or || operators)

let myMarks = 79;
let friendMarks = 78;
if (myMarks > 60 && myMarks < 70) {
    console.log('I will not get the Job');
}
else if (myMarks >= 70 && myMarks < 75) {
    console.log('I have a probability to get the job')

}
else if (myMarks > 75 && friendMarks >= 75) {
    console.log('Both are can get the JOb')
}
else {
    console.log('I will get the job')
}