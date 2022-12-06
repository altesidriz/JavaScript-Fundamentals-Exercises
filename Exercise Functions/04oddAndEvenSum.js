function oddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;
    let num = number.toString();

    for (let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum
        } else {
            oddSum += currentNum
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)