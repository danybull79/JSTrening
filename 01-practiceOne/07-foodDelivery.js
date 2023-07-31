function foodDelivery (input) {

    let chikenMenue = Number(input[0]);
    let fisshMenue = Number(input[1]);
    let vegMenue = Number(input[2])

    let chikernPriceMenu = chikenMenue * 10.35;
    let fishPriceMenu = fisshMenue * 12.40;
    let vegPriceMenu = vegMenue * 8.15;

    let totalMenuPrice = chikernPriceMenu + fishPriceMenu + vegPriceMenu;

    let dessertPrice = totalMenuPrice * 0.20;

    totalPrice = totalMenuPrice + dessertPrice + 2.50;

    console.log(totalPrice)

}

foodDelivery(["2","4","3"])