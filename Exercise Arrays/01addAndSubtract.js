function addAndSubstract(input) {
    let originalArraySum = 0;
    let modifiedArraySum = 0;
    let arrLength = input.length;

    for (let i = 0; i < arrLength; i++) {
        originalArraySum += input[i]
        if (input[i] % 2 ===0) {
            input[i]+=i;
        }else{
            input[i]-=i;
        }
        modifiedArraySum += input[i];
    }
    console.log(input);
    console.log(originalArraySum);
    console.log(modifiedArraySum);
}
addAndSubstract()