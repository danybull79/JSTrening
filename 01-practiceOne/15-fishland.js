function fishland (input) {

    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);
    let kilosBonito = Number(input[2]);
    let kilosSafrit = Number(input[3]);
    let KilosMussels =  Number(input[4]);

    let bonitoPrice = mackerel + mackerel * 0.60;
    let bonitoSum = bonitoPrice * kilosBonito;

    let safritPrice = sprat + sprat * 0.80;
    let safritSum = safritPrice * kilosSafrit;

    let musselSum = KilosMussels * 7.5;

    let totalSum = bonitoSum +  safritSum + musselSum;
    
    console.log(totalSum.toFixed(2))
}

fishland(["6.90", "4.20", "1.5", "2.5", "1"])