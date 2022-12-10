//------------1 variant----------------
function integerAndFloat(num1, num2, num3) {
    let sum = (num1 + num2 + num3);
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}
integerAndFloat(9,10.1,22.3)

//--------------2 variant--------------

function integerAndFloat2(num1, num2, num3) {
    let sum = (num1 + num2 + num3);
    if (sum % 1 === 0){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }
}
integerAndFloat2(9,10.1,22.3)

//---------------3 variant---------------
function integerAndFloat3 (num1, num2, num3){
    let result = num1+num2+num3;
    let resoString = String(result);
    let isFloat = false;
    for (let i = 0; i < resoString.length; i++){
        if(resoString[i]==="."){
            isFloat = true;
        }
    } 
    console.log(`${result} - ${isFloat ? "Float" : "Integer"}`);
}
integerAndFloat3(9,10.1,22.3)

//-----------4 variant-------------------
function integerAndFloat3 (num1, num2, num3){
    let result = num1+num2+num3;

    console.log(`${result} - ${parseInt(result) === result ? "Integer" : "Float"}`);
}
integerAndFloat3(9,10.1,22.3)
