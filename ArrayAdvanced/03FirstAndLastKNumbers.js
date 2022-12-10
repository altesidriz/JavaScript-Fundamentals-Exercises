function firstAndLastKNumbers(numbers) {
    let k = numbers.shift();

    let firstKnumber = numbers.slice(0,k);
    let lastKnumber = numbers.slice(-k);

    console.log(firstKnumber.join(' '));
    console.log(lastKnumber.join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9])