function triplesOfLatinLetters(number){
    for(let i = 0; i<number; i++){
    let letter = String.fromCharCode(94+number);

    console.log(letter);
    }
}
triplesOfLatinLetters(3)