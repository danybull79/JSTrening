function depositeCalculator (input) {

    let depositeSum = Number(input[0]);
    let depisitPeriod = Number(input[1]);
    let anunalInterestProcent = Number(input[2]);

    let anunalInterestDecimal = anunalInterestProcent / 100

    let finalSum = depositeSum + depisitPeriod*((depositeSum * anunalInterestDecimal) / 12)

    console.log(finalSum)
}

depositeCalculator(["200","3","5.7"])