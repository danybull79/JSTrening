function trainingLab (input) {

    let length = Number(input[0]*100);
    let width = Number(input[1]*100);
    let totalWidth = width-100;


    let desckWidth = Math.floor(totalWidth/70);

    let deskLenght = Math.floor(length/120);

    let countDecsk = desckWidth*deskLenght - 3;
  
  
    console.log(countDecsk);
}

trainingLab (["8.4", "5.2"])