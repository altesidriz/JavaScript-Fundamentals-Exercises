function reverse(n, numbers) {
    let result = [];
    for (let r = n - 1; r >= 0; r--) {
        result.push(numbers[r]);    // nali moje i taka : result += `${numbers[r]} `;
    }
    console.log(result.join(' '));     // i syotvetno: console.log(result);
}
reverse(3, [10, 20, 30, 40, 50])