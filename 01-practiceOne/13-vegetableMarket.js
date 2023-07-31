function vegetableMarket (input) {

    let sumForKiloVegi = Number(input[0]);
    let sumForKiloFrictis = Number(input[1]);
    let totalKiloForVegi = Number(input[2]);
    let totalKilkoForFructis = Number(input[3]);

    let totalVegi = sumForKiloVegi * totalKiloForVegi;
    let totalFructs = sumForKiloFrictis * totalKilkoForFructis

    let totlSum = (totalVegi + totalFructs) / 1.94;


    console.log(totlSum.toFixed(2))
}

vegetableMarket(["0.194", "19.4", "10", "10"])