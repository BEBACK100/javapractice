const students = [
    { name: 'roni', age: 23, hight: '65inc', Likecolor: 'green' },
    { name: 'moni', age: 23, hight: '64inc', Likecolor: 'blue' },
    { name: 'foni', age: 23, hight: '60inc', Likecolor: 'red' },
    { name: 'soni', age: 23, hight: '62inc', Likecolor: 'black' },
    { name: 'doni', age: 23, hight: '67inc', Likecolor: 'white' }
]
function tallest(students) {
    let tall = students[0];
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.hight > tall.hight) {
            tall = student;
        }
    }
    return tall;
}
const mychoice = tallest(students);
console.log(mychoice);