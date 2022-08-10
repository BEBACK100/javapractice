// Can you comapre between two variables? Write functions to check if two numbers are equal, not equal, greater, less, greater than or equal and less than or equal. Declare two number variables and compare them.


let myAge = 30;
let friendAge = 29;
function isequle(age1, age2) {
    if (age1 = age2) {
        console.log('we are same age', age1, age2);
    }
}
function notEqual(age1, age2) {
    if (age1 != age2) {
        console.log('someone is younger', age1, age2)
    }
}
function isgreater(age1, age2) {
    if (age1 > age2) {
        console.log('My friend is younger', age1, age2);
    }
}
function greOrequal(age1, age2) {
    if (age1 >= age2) {
        console.log('we can go any tour', age1, age2);
    }
}

isequle(myAge, friendAge);
notEqual(myAge, friendAge);
isgreater(myAge, friendAge);
greOrequal(myAge, friendAge);