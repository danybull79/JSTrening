function flowers (input) {

    let chrysanthemumsCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumsPrice;
    let rosePrice;
    let tulipsPrice;

    if(season === "Spring" || season === "Summer") {
        chrysanthemumsPrice = 2.00;
        rosePrice = 4.10;
        tulipsPrice = 2.50;
    }else if (season === "Autumn" || season === "Winter") {
        chrysanthemumsPrice = 3.75 ;
        rosePrice = 4.50;
        tulipsPrice = 4.15;
    }

    let flowersPrice = chrysanthemumsCount * chrysanthemumsPrice + roseCount * rosePrice + tulipsCount * tulipsPrice

    if (holiday === "Y") {
        flowersPrice *= 1.15;
    }

    if (tulipsCount > 7 && season === "Spring") {
        flowersPrice *= 0.95;
    }
    if (roseCount >= 10 && season === "Winter") {
        flowersPrice *= 0.90;
    }
    if (chrysanthemumsCount + roseCount + tulipsCount > 20) {
        flowersPrice *= 0.80;
    }

    let totalPrice = flowersPrice + 2;

    console.log(totalPrice.toFixed(2));
}

flowers (["2", "4", "8", "Spring", "Y"])

