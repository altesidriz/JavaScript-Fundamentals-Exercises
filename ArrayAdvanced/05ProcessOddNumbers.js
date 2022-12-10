function processOddNumbers(numbers){
    let filterElement = numbers.filter((el,a) => a % 2 == 1);
    filterElement = filterElement.map(x => (x*2));
    console.log(filterElement.reverse().join(' '));
}
processOddNumbers([10, 15, 20, 25])