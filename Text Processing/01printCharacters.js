function printCharacters(word){
    let result  = word.split('').join('\n');
    console.log(result);

    for (let index = 0; index < word.length; index++) {
        console.log(word[index]);   
    }

    for (const iterator of word) {
        console.log(iterator);
    }
}
printCharacters('AWord')
