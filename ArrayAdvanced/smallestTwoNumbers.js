function smallestTwoNumbers(numbers){
    let ascedingArray = numbers.sort((a,b) => {
        return a-b});
        let smallestTwoNumbers = ascedingArray.slice(0,2);
        console.log(smallestTwoNumbers.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])