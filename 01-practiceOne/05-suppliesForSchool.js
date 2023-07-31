function suppliesForSchool(input) {

    let coutPacagePens = Number(input[0]);
    let countPacageMarkers = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let discountProcent = Number(input[3]);

    let countOfPens = coutPacagePens * 5.80
    let countOfMarcers = countPacageMarkers * 7.20
    let countOfCleaners = boardCleaner * 1.2

    let countAllMatrials = countOfPens + countOfMarcers + countOfCleaners

    let discountPrice = countAllMatrials - (countAllMatrials * 0.25)

    console.log(discountPrice)
}

suppliesForSchool(["2", "3", "4", "25"])