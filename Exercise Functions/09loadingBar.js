function loadingBar (number){
    let complete = '%'.repeat(number/10);
    let incomplete = '.'.repeat((100-number)/10);

    if (number === 100){
        return console.log('100% Complete!');
    } else{
        console.log(`${number}% [${complete}${incomplete}]\nStill loading...`);
    }
}
loadingBar(100)