function taxDuty(input){
    let cars = input[0].split('>>');
    let total = 0;

    for(let i = 0; i < cars.length; i++){
        let types = cars[i].split(' ');
        let result = 0;
        let err = '';
        
            switch(types[0]){
                case 'family': result = Math.floor(Number(types[2]) / 3000) * 12 + (50 - Number(types[1]) * 5); break;
                case 'heavyDuty': result = Math.floor(Number(types[2]) / 9000) * 14 + (80 - Number(types[1]) * 8); break;
                case 'sports': result = Math.floor(Number(types[2]) / 2000) * 18 + (100 - Number(types[1]) * 9); break;
                default: err = 'Invalid car type.'; break;
            }

            total += result;

            if(err === ''){
                console.log(`A ${types[0]} car will pay ${result.toFixed(2)} euros in taxes.`);
            }else {
                console.log(err);
            }
    }

    console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`)
}

taxDuty(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])