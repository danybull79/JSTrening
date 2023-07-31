function weatherForecast(input) {

    let weather = input[0].toLowerCase();

    if (weather === "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}

weatherForecast(["sunny", "cloudy", "snowy"])