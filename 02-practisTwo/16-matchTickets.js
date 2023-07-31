function matchTickets (input) {

    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let ticketPrice = (category === "VIP") ? 499.99 : 249.99;
    let transportPercentage = 0;

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportPercentage = 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportPercentage = 0.60;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportPercentage = 0.50;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportPercentage = 0.40;
    } else if (peopleCount >= 50) {
        transportPercentage = 0.25;
    }

    let totalTicketsPrice = ticketPrice * peopleCount;
    let transportCost = budget * transportPercentage;
    let remainingBudget = budget - transportCost;

    if (remainingBudget >= totalTicketsPrice) {
        let leftMoney = (remainingBudget - totalTicketsPrice).toFixed(2);
        console.log(`Yes! You have ${leftMoney} leva left.`);
    } else {
        let neededMoney = (totalTicketsPrice - remainingBudget).toFixed(2);
        console.log(`Not enough money! You need ${neededMoney} leva.`);
    }

}

matchTickets(["1000", "Normal", "1"])