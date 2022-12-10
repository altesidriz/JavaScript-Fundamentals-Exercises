function rightPlace(str1, char, str2) {
    let res = str1.replace('_', char);
    let output = res === str2 ? "Matched" : "Not Matched";
    console.log(output);
}
rightPlace('ascai', 'I', 'ascai')
rightPlace('asc_i', 'I', 'ascIi')
rightPlace('asc_i', 'I', 'ascai')