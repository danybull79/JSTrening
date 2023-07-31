function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carClass;
    let carPrice;
    let carType;

    if (budget <= 100) {
        carClass = "Economy class";
        carType = season === "Summer" ? "Cabrio" : "Jeep";
        carPrice = season === "Summer" ? 0.35 * budget : 0.65 * budget;   // ако условието season === "Summer" е вчрно(?) 0.35 * budget ако не е вчено (:)0.65 * budget;
    } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class";
        carType = season === "Summer" ? "Cabrio" : "Jeep";
        carPrice = season === "Summer" ? 0.45 * budget : 0.80 * budget;
    } else {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = 0.90 * budget;
    }

    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

carToGo(["450", "Summer"]);

// function carToGo(input) {
//     let budget = Number(input[0]);
//     let season = input[1];

//     let carClass;
//     let carType;
//     let carPrice;

//     if (budget <= 100) {
//         carClass = "Economy class";
//         if (season === "Summer") {
//             carType = "Cabrio";
//             carPrice = 0.35 * budget;
//         } else {
//             carType = "Jeep";
//             carPrice = 0.65 * budget;
//         }
//     } else if (budget <= 500) {
//         carClass = "Compact class";
//         if (season === "Summer") {
//             carType = "Cabrio";
//             carPrice = 0.45 * budget;
//         } else {
//             carType = "Jeep";
//             carPrice = 0.80 * budget;
//         }
//     } else {
//         carClass = "Luxury class";
//         carType = "Jeep";
//         carPrice = 0.90 * budget;
//     }

//     console.log(carClass);
//     console.log(`${carType} - ${carPrice.toFixed(2)}`);
// }