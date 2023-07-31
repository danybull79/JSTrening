function basketballEquipment (input) {

    let anuelTreningFee = Number(input[0]);

    let basketballShoes =  anuelTreningFee - anuelTreningFee * 0.40;
    let bascetballGear = basketballShoes -  basketballShoes * 0.20 ;
    let bascetballBall = bascetballGear * 0.25;
    let bascetballAcsseuarice = bascetballBall * 0.20;

    let totalPrice = anuelTreningFee + basketballShoes + bascetballGear + bascetballBall + bascetballAcsseuarice;

    console.log(totalPrice)

}

basketballEquipment(["365"])