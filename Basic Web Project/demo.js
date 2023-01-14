let fs = require('fs');

let text = fs.readFileSync('./data.txt', 'utf-8');

console.log(text);