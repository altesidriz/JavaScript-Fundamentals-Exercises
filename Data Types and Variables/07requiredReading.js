function requiredReading (pages, pagesPerHour, daysGiven){
    let tottalTime = pages / pagesPerHour;
    let reqHours = tottalTime/daysGiven;
    console.log(parseFloat(reqHours));
}
requiredReading()