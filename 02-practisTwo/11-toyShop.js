function toyShop (input) {

    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let tracsCount = Number(input[5]);

    let totalPrice = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + tracsCount * 2;
    let totalCounts = puzzlesCount + dollsCount + bearsCount + minionsCount + tracsCount;

    if (totalCounts >= 50) {
        totalPrice = 0.75 * totalPrice
    }

    totalPrice = 0.90 * totalPrice;

    if (totalPrice >= vacationPrice) {
        let monyLeft = totalPrice - vacationPrice;
        console.log(`Yes! ${monyLeft.toFixed(2)} lv left.`);
    }else {
        let monyNeeded = vacationPrice - totalPrice;
        console.log(`Not enough money! ${monyNeeded.toFixed(2)} lv needed.`)
    }

}

toyShop (["40.8","20","25","30","50","10"])