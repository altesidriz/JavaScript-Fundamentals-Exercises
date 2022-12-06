function firstLecture(startNumber,endNumber){
    let sum=0;
    let printLine='';
    for(let currentNumber=startNumber;currentNumber<=endNumber;currentNumber++){
        sum+=currentNumber;
        printLine+=`${currentNumber} `
    }
    console.log(printLine);
    console.log(sum);
}
firstLecture(5,10);