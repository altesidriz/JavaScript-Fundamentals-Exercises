function equalArrays(arr1, arr2) {
    let sum = 0;
    let currentIndex = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            ifIdentical = false;
            currentIndex = i ;
            break;
        } else {
            ifIdentical = true;
            sum += Number(arr1[i]);
        }

    }
    if (ifIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {

        console.log(`Arrays are not identical. Found difference at ${currentIndex} index`);
    }
}
equalArrays(['-', '-', '2'], ['1', '1', '2',])

