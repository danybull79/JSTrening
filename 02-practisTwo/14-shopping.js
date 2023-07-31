function shopping (input) {

    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let procesorCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);

    let videoCardPrice = videoCardCount * 250;
    let procesorPrice = procesorCount * (0.35 * videoCardPrice);
    let ramMemoriPrice = ramMemoryCount * (0.10 * videoCardPrice)

    let totalPrice = videoCardPrice + procesorPrice + ramMemoriPrice;

    if(videoCardCount > procesorCount) {
        totalPrice = 0.85 * totalPrice
    }

    if(budget >= totalPrice) {
        let budgetLest = budget - totalPrice;
        console.log(`You have ${budgetLest.toFixed(2)} leva left!`);
    }else {
        let budgetNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`)
    }

}

shopping (["920.45","3","1","1"])