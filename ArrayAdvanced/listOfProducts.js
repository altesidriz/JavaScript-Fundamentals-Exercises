// function listOfProducts (products){
//     let orderOfProducts = products.sort();

//     for(let i = 0 ; i < orderOfProducts.length; i++ ){
//         console.log(`${i + 1}.${orderOfProducts[i]}`);
//     }
// }
//listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])


function orderProducts(array){
    let orderedArray = array.sort((a,b) => a.localeCompare(b));
    let number = 1;
    let result = '';
    orderedArray.forEach(element => {
        element = number + element;
        number++;
    });
    console.log(orderedArray);
}
orderProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])