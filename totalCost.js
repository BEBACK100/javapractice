const shoppingList = [
    { name: 'chair', price: 1000, quantity: 10 },
    { name: 'table', price: 4000, quantity: 5 },
    { name: 'wlapaper', price: 2000, quantity: 4 },
    { name: 'mat', price: 1200, quantity: 6 },

]
function totalcost(matarials) {
    let sum = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        let matirial = matarials[i];
        const totalmatirial = matirial.price * matirial.quantity
        sum = sum + totalmatirial.price;
    }
    return sum;
}
const result = (matarials);
const expanse = totalcost(result);
console.log(expanse);