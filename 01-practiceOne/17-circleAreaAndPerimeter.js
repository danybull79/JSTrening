function circleAreaAndPerimeter (input) {

    let numberR = Number(input[0]);

    let area = Math.PI * numberR * numberR;
    let perimeter = 2 * Math.PI * numberR;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaAndPerimeter(["3"])