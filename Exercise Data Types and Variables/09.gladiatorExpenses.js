function gladiatorExpenses(lostFights, helmetPr, swordPr, shieldPr, armorPr) {

    let expenses = 0;
    let lostFightCounter = 0; // moje da ne izpolzvame, a vmesto nego i kato broqch na fight
    let shieldBrokeCount = 0;

    for(let i = 1; i <= lostFights; i++){

        lostFightCounter++;

        if(lostFightCounter % 2 === 0){
            expenses += helmetPr;
        }
        if(lostFightCounter % 3 === 0){
            expenses += swordPr;
        }
        if(lostFightCounter % 6 === 0){
            expenses += shieldPr;
            shieldBrokeCount++
            if(shieldBrokeCount % 2 === 0){
                expenses += armorPr;
            }
        }

    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7,2,3,4,5)