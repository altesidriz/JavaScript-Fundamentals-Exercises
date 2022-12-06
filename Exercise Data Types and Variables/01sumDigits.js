function sumDigits(number) {
    let numToString = number.toString();
    let sumOfSymbols = 0;

    for (index = 0; index < numToString.length; index++) {
        sumOfSymbols += Number(numToString[index]);
    }
    console.log(sumOfSymbols);
}
sumDigits(245678)