let NUMBER_STORE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
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
    let numberSquareIndexArrayValue = Math.floor(Math.random() * 9);
    let firstIndex = numberSquareIndexes[numberSquareIndexArrayValue][0];
    let secondIndex = numberSquareIndexes[numberSquareIndexArrayValue][1];
    let thirdIndex = numberSquareIndexes[numberSquareIndexArrayValue][2];
    let forthIndex = numberSquareIndexes[numberSquareIndexArrayValue][3];
    while( NUMBER_STORE[firstIndex] !== 0 && NUMBER_STORE[secondIndex] !== 0 && 
        NUMBER_STORE[thirdIndex] !== 0 && NUMBER_STORE[forthIndex] !== 0 ){
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
    numberSquare.push(NUMBER_STORE[firstIndex]);
    numberSquare.push(NUMBER_STORE[secondIndex]);
    numberSquare.push(NUMBER_STORE[thirdIndex]);
    numberSquare.push(NUMBER_STORE[forthIndex]);
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

    NUMBER_STORE[numberSquareIndexes[numberSquareIndexArrayValue][0]] = numberSquare[0];
    NUMBER_STORE[numberSquareIndexes[numberSquareIndexArrayValue][1]] = numberSquare[1];
    NUMBER_STORE[numberSquareIndexes[numberSquareIndexArrayValue][2]] = numberSquare[2];
    NUMBER_STORE[numberSquareIndexes[numberSquareIndexArrayValue][3]] = numberSquare[3];
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
    const clickedValueIndex = NUMBER_STORE.indexOf(clickedValue);
    let row = clickedValueIndex % COL_OF_DISP;
    let col = Math.floor(clickedValueIndex / COL_OF_DISP);  
   if(row - 1 >= 0 && NUMBER_STORE[col * COL_OF_DISP +  row - 1] === 0){
    return true;
   }
   else if(row + 1 < COL_OF_DISP && NUMBER_STORE[col * COL_OF_DISP +  row + 1] === 0){
    return true;
   }
   else if(col - 1 >= 0 && NUMBER_STORE[(col - 1) * COL_OF_DISP +  row] === 0){
    return true;
   }
   else if(col + 1 < COL_OF_DISP && NUMBER_STORE[(col + 1) * COL_OF_DISP + row] === 0){
    return true;
   }
    return false;
}

function changeNumberValue(clickedValue){
const clickedValueIndex = NUMBER_STORE.indexOf(clickedValue);
const zeroValueIndex = NUMBER_STORE.indexOf(0);
NUMBER_STORE[zeroValueIndex] = clickedValue;
NUMBER_STORE[clickedValueIndex] = 0;
}

function isTheEndOfTheGame(){
for(let i = 0; i < NUMBER_STORE.length - 2; i++){
    if(NUMBER_STORE[i] + 1 !== NUMBER_STORE[ i + 1 ]){
        return false;
    }
}
return true;
}

function initSumShuffleValue(){
    sumShuffleValue = 0;
}

    export {NUMBER_STORE, sumShuffleValue};
    export {shuffleNumberSquare, step, isTheEndOfTheGame, initSumShuffleValue};                                    