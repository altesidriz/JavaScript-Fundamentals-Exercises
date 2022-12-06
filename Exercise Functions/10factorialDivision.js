// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// function factorialDivision(n, div) {
//     return (factorial(n) / div).toFixed(2);
// }
// console.log(factorialDivision(0, 2));

// function factorialDivision(number, division) {
//     let factorial = number;
//     if (number === 0 || number === 1){
//         return 1;
//     }
//     for (let i = number - 1; i > 0; i--) {
//         factorial *= i;
//     }
//     return (factorial / division).toFixed(2);
// }

// program to count down numbers to 1
function racursionFactoriel(number, division) {
    let newNumber = number * number-1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}

racursionFactoriel(4,2);