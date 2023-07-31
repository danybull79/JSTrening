function trapeziodArea(input) {

    let basisB1 = Number(input[0]);
    let basisB2 = Number(input[1]);
    let heightH = Number(input[2]);

    let area = (basisB1 + basisB2) * heightH / 2

    console.log(area.toFixed(2))

}

trapeziodArea(["8", "13", "7"])