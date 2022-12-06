function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let charsInRange = [];

    for (let i = startChar + 1; i < endChar; i++){
        let currentChar = String.fromCharCode(i);
        charsInRange.push(currentChar);
    }
    console.log(charsInRange.join(' '));  
}
charactersInRange('a', 'd')