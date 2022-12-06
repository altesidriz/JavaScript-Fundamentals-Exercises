function prinAndSum (num1,num2){

    let counter = 0;
    let line = '';
    for(let i = num1; i <= num2; i++){
        counter += i;
       line +=  i + ' '; 
    }
    console.log(line);
    console.log(`Sum: ${counter}`);
    console.log(typeof line);
}
prinAndSum(5,10)
