function evenAndOddSubtraction(numbers){
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i <= numbers.length - 1; i++){
        numbers[i] = Number(numbers[i]);
        if(numbers[i] % 2 === 0){
            evenSum += numbers[i];
        }
        if(numbers[i] % 2 != 0){
            oddSum += numbers[i];
        }
    }
    let tottal = evenSum - oddSum;
    console.log(tottal);
}
evenAndOddSubtraction([3,5,7,9])