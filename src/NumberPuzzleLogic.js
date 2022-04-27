let numberStore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const COL_OF_DISP = 4;
let sumShuffleValue = 0;

const numberSquareIndexes = [
                            [0, 1, 5, 4],
                            [1, 2, 6, 5],
                            [2, 3, 7, 6],
                            [4, 5, 9, 8],
                            [5, 6, 10, 9],
                            [6, 7, 11, 10],
                            [8, 9, 13, 12],
                            [9, 10, 14, 13],
                            [10, 11, 15, 14]
                                        ];

function getNumberSquareIndexArrayValue(){
    let numberSquareIndexArrayValue = 0;
    let firstIndex = numberSquareIndexes[numberSquareIndexArrayValue][0];
    let secondIndex = numberSquareIndexes[numberSquareIndexArrayValue][1];
    let thirdIndex = numberSquareIndexes[numberSquareIndexArrayValue][2];
    let forthIndex = numberSquareIndexes[numberSquareIndexArrayValue][3];
    while( numberStore[firstIndex] !== 0 && numberStore[secondIndex] !== 0 && 
        numberStore[thirdIndex] !== 0 && numberStore[forthIndex] !== 0 ){
        numberSquareIndexArrayValue = Math.floor(Math.random() * 9);
        firstIndex = numberSquareIndexes[numberSquareIndexArrayValue][0];
        secondIndex = numberSquareIndexes[numberSquareIndexArrayValue][1];
        thirdIndex = numberSquareIndexes[numberSquareIndexArrayValue][2];
        forthIndex = numberSquareIndexes[numberSquareIndexArrayValue][3];
    } 
    return numberSquareIndexArrayValue;
}

function shuffleNumberSquare(){
    const numberSquareIndexArrayValue = getNumberSquareIndexArrayValue();
    const numberSquareArray = numberSquareIndexes[numberSquareIndexArrayValue];
    const firstIndex = numberSquareArray[0];
    const secondIndex = numberSquareArray[1];
    const thirdIndex = numberSquareArray[2];
    const forthIndex = numberSquareArray[3];
    let numberSquare = [];
    numberSquare.push(numberStore[firstIndex]);
    numberSquare.push(numberStore[secondIndex]);
    numberSquare.push(numberStore[thirdIndex]);
    numberSquare.push(numberStore[forthIndex]);
    let shuffleValue = Math.floor(Math.random() * 4);
    sumNeedFullClick(shuffleValue);
    if( shuffleValue === 1 ){
        let temp = numberSquare[0];
        numberSquare[0] = numberSquare[3];
        numberSquare[3] = numberSquare[2];
        numberSquare[2] = numberSquare[1];
        numberSquare[1] = temp;
    }
    else if( shuffleValue === 2 ){
        let temp = numberSquare[0];
        numberSquare[0] = numberSquare[2];
        numberSquare[2] = temp;
        temp = numberSquare[1];
        numberSquare[1] = numberSquare[3];
        numberSquare[3] = temp;
    }
    else if ( shuffleValue === 3 ){
        let temp = numberSquare[0];
        numberSquare[0] = numberSquare[1];
        numberSquare[1] = numberSquare[2];
        numberSquare[2] = numberSquare[3];
        numberSquare[3] = temp;
    }

    numberStore[numberSquareIndexes[numberSquareIndexArrayValue][0]] = numberSquare[0];
    numberStore[numberSquareIndexes[numberSquareIndexArrayValue][1]] = numberSquare[1];
    numberStore[numberSquareIndexes[numberSquareIndexArrayValue][2]] = numberSquare[2];
    numberStore[numberSquareIndexes[numberSquareIndexArrayValue][3]] = numberSquare[3];
}

function sumNeedFullClick(rotateValue){ 
if( rotateValue === 1 || rotateValue === 3 ){
    sumShuffleValue += 3;
}
else if( rotateValue === 2 ){
    sumShuffleValue += 6;
}
}

function step(clickedValue){
if( !isClickAble(clickedValue) ) {
    alert("Nem léptethető mező!")
    return;
}
else {
    changeNumberValue(clickedValue);
    }
}

function isClickAble(clickedValue){
    const clickedValueIndex = numberStore.indexOf(clickedValue);
    let row = clickedValueIndex % COL_OF_DISP;
    let col = Math.floor(clickedValueIndex / COL_OF_DISP);  
   if(row - 1 >= 0 && numberStore[col * COL_OF_DISP +  row - 1] === 0){
    return true;
   }
   else if(row + 1 < COL_OF_DISP && numberStore[col * COL_OF_DISP +  row + 1] === 0){
    return true;
   }
   else if(col - 1 >= 0 && numberStore[(col - 1) * COL_OF_DISP +  row] === 0){
    return true;
   }
   else if(col + 1 < COL_OF_DISP && numberStore[(col + 1) * COL_OF_DISP + row] === 0){
    return true;
   }
    return false;
}

function changeNumberValue(clickedValue){
const clickedValueIndex = numberStore.indexOf(clickedValue);
const zeroValueIndex = numberStore.indexOf(0);
numberStore[zeroValueIndex] = clickedValue;
numberStore[clickedValueIndex] = 0;
}

function isTheEndOfTheGame(){
for(let i = 0; i < numberStore.length - 2; i++){
    if(numberStore[i] + 1 !== numberStore[ i + 1 ]){
        return false;
    }
}
return true;
}

function initSumShuffleValue(){
    sumShuffleValue = 0;
}

    export {numberStore, sumShuffleValue};
    export {shuffleNumberSquare, step, isTheEndOfTheGame, initSumShuffleValue};                                    