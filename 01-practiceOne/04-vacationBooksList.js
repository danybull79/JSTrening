function vacationBooksList (input) {

    let countPages = Number(input[0]);
    let pagesPerHours = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = countPages/ pagesPerHours
    let hourPreDay = totalTime / days

    console.log(hourPreDay)
}

vacationBooksList(["212","20","2"])