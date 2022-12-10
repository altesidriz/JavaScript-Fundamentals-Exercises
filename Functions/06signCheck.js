function signCheck(a, b, c) {
    let newArr = [];
    newArr.push(a) + newArr.push(b) + newArr.push(c);
    let negativeSum = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] < 0) {
            negativeSum += 1;
        }
    }
    if (negativeSum % 2 === 0) {
        return "Positive"
    } else {
        return "Negative"
    }
}
console.log(signCheck(5, 12, -15));
console.log(signCheck(6, 12, 14));
