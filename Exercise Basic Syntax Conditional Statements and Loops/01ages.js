function ages(age) {
    if (age >= 66) {
        console.log('elder');
    } else if (age >= 20 && age <= 65) {
        console.log('adult');
    } else if (age <= 19 && age >= 14) {
        console.log('teenager');
    } else if (age <= 13 && age >= 3) {
        console.log('child');
    } else if (age <= 2 && age >= 0) {
        console.log('baby');
    } else {
        console.log('out of bounds');
    }
}
ages(20)
ages(1)
ages(100)
ages(-1)