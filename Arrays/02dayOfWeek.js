function dayOfWeek(digit) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = '';
    if (digit >= 1 && digit <= 7) {
        result = week[digit - 1];
    } else {
        result = 'Invalid day!'
    }
    console.log(result);
}
dayOfWeek(7)

function dayOfWeek(n) {
    if (n < 1 || n > 7) {
        console.log("Invalid day!");
        return;
    }
        let dayNameArr = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"]

        console.log(dayNameArr[n - 1])
}
dayOfWeek([9])
