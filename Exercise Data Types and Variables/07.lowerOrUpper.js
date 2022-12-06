function lowerOrUpper(symbol){
    let answer = '';
    if(symbol === symbol.toUpperCase()){
        answer = 'upper'
    }else{
        answer = 'lower'
    }
    console.log(`${answer}-case`);
}

lowerOrUpper('l')