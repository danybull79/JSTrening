function vacation (input) {

    let budget = Number(input[0]);
    let seasno = input[1];

    let location;
    let vacationPrice;
    let placeOfAccommodation;

    if(budget <= 1000) {
        placeOfAccommodation = "Camp"
        location = seasno === "Summer" ? "Alaska" : "Morocco";
        vacationPrice = seasno === "Summer" ? 0.65 * budget : 0.45 * budget
    }else if (budget > 1000 && budget <= 3000) {
        placeOfAccommodation = "Hut"
        location = seasno === "Summer" ? "Alaska" : "Morocco";
        vacationPrice = seasno === "Summer" ? 0.80 * budget : 0.60 * budget
    }else if (budget > 3000) {
        placeOfAccommodation = "Hotel"
        location = seasno === "Summer" ? "Alaska" : "Morocco";
        vacationPrice = seasno === "Summer" ? 0.90 * budget : 0.90 * budget
    }

    console.log(`${location} - ${placeOfAccommodation} - ${vacationPrice.toFixed(2)}`);
}

vacation (["800", "Summer"])