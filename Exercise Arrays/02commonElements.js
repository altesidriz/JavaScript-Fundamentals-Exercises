function commonElements (firstArray,secondArray){

    for (const element of firstArray) {
        if (secondArray.includes(element)) {
            console.log(element);
        }
    }
}
commonElements()