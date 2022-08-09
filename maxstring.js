const laptops = [
    { brand: 'hp', color: 'white', Ram: '4gb', price: 25000 },
    { brand: 'lenavo', color: 'blue', Ram: '8gb', price: 205000 },
    { brand: 'dell', color: 'black', Ram: '6gb', price: 125000 },
    { brand: 'apple', color: 'green', Ram: '2gb', price: 250000 },
    { brand: 'samsung', color: 'lightgreen', Ram: '12b', price: 253000 },
]
function higestprice(laptops) {
    let higest = laptops[0];
    for (let i = 0; i < laptops.length; i++) {
        const laptop = laptops[i];
        if (laptop.price > higest.price) {
            higest = laptop;
        }
    }
    return higest;
}
const mychoice = higestprice(laptops);
console.log(mychoice);