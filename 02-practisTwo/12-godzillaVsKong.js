function godzillaVsKong (input) {

    let budget = Number(input[0]);
    let actorCount = Number(input[1]);
    let clothPricePerActor = Number(input[2]);

    let decorPrice = 0.10 * budget;
    let totalClothPrice = actorCount * clothPricePerActor;

    if (actorCount > 150) {
        totalClothPrice = 0.90 * totalClothPrice
    }

    let totalprice = decorPrice + totalClothPrice;
 
    if (totalprice > budget) {
        let monyNeeded = totalprice - budget;
        console.log("Not enough money!")
        console.log(`Wingard needs ${monyNeeded.toFixed(2)} leva more.`);
    }else {
        let = monyLeft = budget - totalprice;
        console.log("Action!")
        console.log(`Wingard starts filming with ${monyLeft.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000","120","55.5"])