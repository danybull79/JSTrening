function bonusScore (input) {

    let initialPoints = Number(input[0]);
    let bonusPoint = 0;

    if(initialPoints <= 100) {
        bonusPoint = 5;
    }else if (initialPoints < 1000) {
        bonusPoint = 0.20  * initialPoints
    }else {
        bonusPoint = 0.10 * initialPoints
    }

    if(initialPoints % 2 === 0) {
        bonusPoint = bonusPoint + 1
    }else if (initialPoints % 10 === 5) {
        bonusPoint = bonusPoint + 2
    }

    console.log(bonusPoint);
    console.log(initialPoints + bonusPoint);

}

bonusScore (["175"])