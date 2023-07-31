function truckDriver(input) {
    let season = input[0];
    let kilometerPerMonth = Number(input[1]);

    let sumPerKilometer;

    if (kilometerPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn")
            sumPerKilometer = 0.75;
        else if (season === "Summer")
            sumPerKilometer = 0.90;
        else if (season === "Winter")
            sumPerKilometer = 1.05;
    } else if (kilometerPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn")
            sumPerKilometer = 0.95;
        else if (season === "Summer")
            sumPerKilometer = 1.10;
        else if (season === "Winter")
            sumPerKilometer = 1.25;
    } else if (kilometerPerMonth <= 20000) {
        sumPerKilometer = 1.45;
    }

    let salary = sumPerKilometer * kilometerPerMonth * 4;
    salary *= 0.90;

    console.log(salary.toFixed(2));
}

truckDriver(["Summer", 3455]);