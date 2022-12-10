function echoType(param){
    let res = typeof(param);
    
    if(res == 'string' || res == 'number'){
        console.log(res);
        console.log(param);
    }else{
        console.log(res);
        console.log('Parameter is not suitable for printing');
    }
}

echoType(56)