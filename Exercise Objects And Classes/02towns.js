function towns(input) {
    let info = {}

    for (const element of input) {

        let townInfo = element.split(' | ');
        let townName = townInfo[0];
        let townLatitude = Number(townInfo[1]).toFixed(2);
        let townLongtitude = Number(townInfo[2]).toFixed(2);

        info.town = townName;
        info.latitude = townLatitude;
        info.longitude = townLongtitude;

        console.log(info);

    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])