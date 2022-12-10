function amazingNumber(number) {
    number = String(number);
    let sum = 0;
    let isAmazing = false;
    for (let i = number.length - 1; i >= 0; i--) {
        //console.log(number[i]);
        sum += Number(number[i]);
    }
    sum = String(sum);
    for (let j = 0; j < sum.length; j++) {

        if (sum[j] == 9) {
            isAmazing = true;
        }
    }
    if (isAmazing) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}
amazingNumber(1233)

//-----------------2--------------------
function amazingNumbers2(num) {
    let numToString = String(num);
    let result = 0;
    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        result += num;
    }
    let resultToString = String(result);
    let isAmazing = false;
    for (let i = 0; i < resultToString.length; i++) {
        if (Number(resultToString[i]) === 9) {
            isAmazing = true;
            break;
        }
    }
    let amazing = isAmazing ? "Hello :D" : "False";
    console.log(`${num} Amazing? ${amazing}`);
}
amazingNumbers2(1233)

//-------------3---------------
function amazingNumbers3(num) {
    let numToString = String(num);
    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        result += num;
    }
    console.log(`${num} Amazing? ${result.toString().indexOf("9") >= 0 ? "True" : "False"}`)
}
amazingNumbers3(1233)
//----------------4-------------
function solve(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++)
        sum += Number(num[i]);
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True`
        : `${num} Amazing? False`);
}
solve(1233)