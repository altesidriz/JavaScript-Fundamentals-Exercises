function negativeOrPositiveNumbers(array) {
    let myArray = [];

    for (let element of array) {
        element = Number(element);
        if (element < 0) {
            myArray.unshift(element);
        } else {
            myArray.push(element);
        }
    }
    console.log(myArray.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])