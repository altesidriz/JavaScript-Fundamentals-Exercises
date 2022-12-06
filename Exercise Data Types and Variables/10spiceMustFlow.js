function spiceMustFlow(startingYield) {

    let sumOfSpice = 0;;
    let yieldCounter = 0;

    while (startingYield >= 100) {
        yieldCounter++;
        sumOfSpice += startingYield - 26;
        startingYield -= 10;
    }
    console.log(yieldCounter);

    if (yieldCounter !== 0) {
        console.log(sumOfSpice - 26);
    }else{
        console.log(sumOfSpice);
    }
}
spiceMustFlow(111)