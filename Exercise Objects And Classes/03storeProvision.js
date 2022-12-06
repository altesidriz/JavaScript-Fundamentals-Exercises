function  storeProvision (currentStocks, forDelivery){
    let storeProducts = {};
    let currentL = currentStocks.length;
    let forDeliveryL = forDelivery.length;

    for (let index = 0; index < currentL; index+=2) {
        let product = currentStocks[index];
        storeProducts[product] = Number (currentStocks[index+1]);
    }
    console.log(storeProducts); 

}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ],
               ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])