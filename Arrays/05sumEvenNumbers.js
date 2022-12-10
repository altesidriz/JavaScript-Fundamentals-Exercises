function sumEvenNumbers(array){
    let buff = 0;
    for(let i = 0; i <= array.length - 1; i++){
        array[i] = Number(array[i]);
        if(array[i] % 2 === 0){
            buff += array[i];
        }
    }
    console.log(buff);
}
sumEvenNumbers(['1','2','3','4','5','6'])