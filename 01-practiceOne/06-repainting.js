function repainting (input) {

    let countOfNylon = Number(input[0]);
    let countOfPeint = Number(input[1]);
    let countOfThinner = Number(input[2]);
    let workHouer = Number(input[3]);

    let totalNylon = countOfNylon + 2;

    let additionlPeintQuantity = 0.10 * countOfPeint;
    let totalPeintQuantity = countOfPeint + additionlPeintQuantity

    let totalMaterialsPrice = totalPeintQuantity * 14.50 + totalNylon * 1.50 + countOfThinner * 5 + 0.40;

    let workSumPerhouer = 0.30 * totalMaterialsPrice
    let totalWorkerSum = workSumPerhouer * workHouer

    let totalSum = totalMaterialsPrice + totalWorkerSum

    console.log(totalSum)

}

repainting(["10","11","4","8"])