function fishTank (input) {

 let length = Number(input[0]);
 let width = Number(input[1]);
 let height = Number(input[2]);
 let procent = Number(input[3]);

 let volume = length * width * height;
 let volumeLiters = volume * 0.001;

 let occupiedSpace = procent / 100;

 let needLiters = volumeLiters * (1 - occupiedSpace)

 console.log(needLiters)

}

fishTank(["85","75","47","17"])