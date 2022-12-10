function theHuntingGames(input) {
    let daysOfAdventure = Number(input[0]);
    let numPlayers = Number(input[1]);
    let groupEnergy = Number(input[2]);
    let waterPerDay = Number(input[3]);
    let foodPerDay = Number(input[4]);
    let index = 5;

    let totalWater = waterPerDay * numPlayers * daysOfAdventure;
    let totalFood = foodPerDay * numPlayers * daysOfAdventure;
    let dayCounter = 1;
    let isHaveEnergy = true;


    for (let i = 1; i <= daysOfAdventure; i++) {
        groupEnergy -= Number(input[index]);

        if (groupEnergy <= 0) {
            isHaveEnergy = false;
            break;
        }
        if (dayCounter % 2 === 0) {
            groupEnergy += groupEnergy * 0.05
            totalWater -= totalWater * 0.3;
        }
        if (dayCounter % 3 === 0) {
            groupEnergy += groupEnergy * 0.1;
            totalFood -= totalFood / numPlayers;
        }

        dayCounter++;
        index++;
    }
    if (isHaveEnergy) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
}


theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]

)