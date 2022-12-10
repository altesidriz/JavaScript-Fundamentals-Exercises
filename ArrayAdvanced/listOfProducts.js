function listOfProducts (products){
    let orderOfProducts = products.sort();

    for(let i = 0 ; i < orderOfProducts.length; i++ ){
        console.log(`${i + 1}.${orderOfProducts[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])