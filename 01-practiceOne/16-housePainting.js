function housePainting (input) {

    heightX = Number(input[0]);
    lengthY = Number(input[1]);
    heightH = Number(input[2]);

    rectangularWall = heightX * lengthY;
    squareWall = heightX * heightX;

    window = 1.5 * 1.5;
    door = 1.2 * 2;

    twoRectangularWall = 2 * rectangularWall - 2* window;
    twoSquareWall = 2 * squareWall - door;

    totaltwoRectangularWall = rectangularWall + rectangularWall

    totalGreenArea = twoRectangularWall + twoSquareWall;

    trianglesRoof = 2 * (heightX * heightH / 2);

    totalRedArea = totaltwoRectangularWall + trianglesRoof;

    totalGreenPeint = totalGreenArea / 3.4;
    totalRedPeint = totalRedArea / 4.3;

console.log(totalGreenPeint.toFixed(2));
console.log(totalRedPeint.toFixed(2));

}

housePainting(["6", "10", "5.2"])