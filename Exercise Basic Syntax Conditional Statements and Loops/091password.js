function login(input){
    let index = 0;
    let userName = input[index];
    index++;
    let password = '';
    let isCorrect = true;

    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }

    while(input[index] != password){
        
        if(index === 4){
            isCorrect = false;
            console.log(`User ${userName} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
        index++;
    }
    if(isCorrect){

        console.log(`User ${userName} logged in.`);
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])

