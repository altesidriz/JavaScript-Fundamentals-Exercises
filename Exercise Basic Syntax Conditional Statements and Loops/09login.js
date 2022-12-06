function login(input){
    let index = 0;
    let userName = input[index];
    index++;
    let correct = (userName.split("").reverse().join(""));
    let isCorrect = true;

    while(input[index] != correct){
        
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