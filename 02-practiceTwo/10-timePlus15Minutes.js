function timePlus15Minutes (input) {

    let initialHouer = Number(input[0]);
    let initialMinets = Number(input[1]);

    let totalMinets = initialHouer * 60 + initialMinets + 15;

    let hour = Math.floor(totalMinets / 60);
    let mins = totalMinets % 60;

    if ( hour === 24) {
        hour = 0
    }

    if (mins < 10) {
        console.log(`${hour}:0${mins}`)
    }else {
        console.log(`${hour}:${mins}`)
    }

}

timePlus15Minutes(["1", "46"])