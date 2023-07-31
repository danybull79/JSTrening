function worldSwimmingRecord (input) {

    let recordInSec = Number(input[0]);
    let dictenceInMeter = Number(input[1]);
    let timeInSecForOneMeter = Number(input[2]);

    let ivanTime = dictenceInMeter * timeInSecForOneMeter;
    let waterResistance = Math.floor (dictenceInMeter / 15) * 12.5;
    
    let totalTime = ivanTime + waterResistance

    if (totalTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeNeeded = totalTime - recordInSec;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord (["10464","1500","20"])