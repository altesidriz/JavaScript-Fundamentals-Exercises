function sum(array) {
    let first = array.shift();
    let last = array.pop();
    console.log(Number(last) + Number(first));
}
sum(['20', '30', '40'])