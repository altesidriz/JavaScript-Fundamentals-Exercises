function rightPlace(w1, char, w2) {
    let res = '';
    for (let i = 0; i < w1.length; i++) {
        let currWord = w1[i];
        if (currWord === '_') {
            res += char;
        } else {
            res += currWord;
        }
    }

    if (res === w2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'StrIng')
rightPlace('StrIng', 'I', 'StrIng')
rightPlace('Str_ng', 'I', 'Strang')