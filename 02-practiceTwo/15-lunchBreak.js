function lunchBreak (input) {

    let muvieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuratin = Number(input[2]);

    let lunchDuration = (1/8) * breakDuratin;
    let leisureDuratin = (1/4) * breakDuratin;

    let totalTakenTime = lunchDuration + leisureDuratin;
    let timeLeft = breakDuratin - totalTakenTime;

    if(timeLeft >= episodeDuration) {
        let timeAfterMuvie = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${muvieName} and left with ${Math.ceil(timeAfterMuvie)} minutes free time.`);
    }else {
        let tineNeeded = episodeDuration - timeLeft
        console.log(`You don't have enough time to watch ${muvieName}, you need ${Math.ceil(tineNeeded)} more minutes.`);
    }

}

lunchBreak (["Game of Thrones","60","96"])