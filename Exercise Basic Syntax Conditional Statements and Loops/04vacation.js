function vacation(countPpl, groupType, day) {

    let price = 0;
    let tottalPrice = 0;
    if (groupType === 'Students') {
        switch (day) {
            case 'Friday': price = 8.45; break;
            case 'Saturday': price = 9.80; break;
            case 'Sunday': price = 10.46; break;
            default: console.log('error'); break;
        }
        tottalPrice = countPpl * price;
        if (countPpl >= 30) {
            tottalPrice -= tottalPrice * 0.15
        }
    } else if (groupType === 'Business') {
        switch (day) {
            case 'Friday': price = 10.90; break;
            case 'Saturday': price = 15.60; break;
            case 'Sunday': price = 16; break;
            default: console.log('error'); break;
        }
        if (countPpl >= 100) {
            countPpl -= 10;
        }
        tottalPrice = countPpl * price;
    } else if (groupType === 'Regular') {
        switch (day) {
            case 'Friday': price = 15; break;
            case 'Saturday': price = 20; break;
            case 'Sunday': price = 22.50; break;
            default: console.log('error'); break;
        }
        tottalPrice = countPpl * price;
        if (countPpl >= 10 && countPpl <= 20) {
            tottalPrice -= tottalPrice * 0.05;
        }
    }
    console.log(`Total price: ${tottalPrice.toFixed(2)}`);
}
vacation(40,
    "Business",
    "Saturday"
)