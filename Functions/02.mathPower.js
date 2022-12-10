function mathPower(number, power){
    console.log(Math.pow(number,power));
}
mathPower(2, 8)

console.log(`~~~~~~~~~~~~~~~2 variant~~~~~~~~~~~~~~~~`);

function mathPower1(number, power){
    let res = 1;
    for (let i = 0; i < power; i++){
        res *= number
    }
    console.log(res);
}
mathPower1(2, 8)