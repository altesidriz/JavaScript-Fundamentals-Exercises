function addAndSubtract(num1, num2, num3) {

    let sumNum1andNum2 = sum(num1, num2);
    console.log(subtract(sumNum1andNum2, num3));
    function sum(a, b) {         // let sum = (a, b) => a + b ;
        return a + b;
    }
    function subtract(a, b) {    // let substract = (a, b) => a - b;
        return a - b;
    }
}
addAndSubtract(23, 6, 10)