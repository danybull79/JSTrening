function bikeRace (input) {

    let juniorsCyclists = Number(input[0]);
    let seniorsCyclists = Number(input[1]);
    let trace = input[2];

    juniorTaks = 0;
    siniorTaks = 0;

    if(trace === "trail") {
        juniorTaks = 5.50;
        siniorTaks = 7;
    }else if (trace === "cross-country") {
        juniorTaks = 8;
        siniorTaks = 9.50;
    }else if (trace === "downhill") {
        juniorTaks = 12.25;
        siniorTaks = 13.75;
    }else if(trace === "road") {
        juniorTaks = 20
        siniorTaks = 21.50
    }

    let totalTaks = juniorsCyclists * juniorTaks + seniorsCyclists * siniorTaks;

    if(trace === "cross-country" && (juniorsCyclists + seniorsCyclists) >= 50) {
        totalTaks = 0.75 * totalTaks
    }

    let expenses = 0.05 * totalTaks
    let finalAmount = totalTaks - expenses;


    console.log(finalAmount.toFixed(2))
}

bikeRace(["30", "25", "cross-country"])