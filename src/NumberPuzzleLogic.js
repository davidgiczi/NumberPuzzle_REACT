let numberStore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

const numberSquareIndexes = [
                            [0, 1, 4, 5],
                            [1, 2, 5, 6],
                            [2, 3, 6, 7],
                            [4, 5, 8, 9],
                            [5, 6, 10, 11],
                            [6, 7, 11, 12],
                            [8, 9, 12, 13],
                            [9, 10, 13, 14],
                            [10, 11, 14, 15]
                                        ];

function shuffleNumberSquare(){

    let numberSquareIndex = Math.floor(Math.random() * 9);
    let numberSquare = [];
    numberSquare.push(numberStore[numberSquareIndexes[numberSquareIndex][0]]);
    numberSquare.push(numberStore[numberSquareIndexes[numberSquareIndex][1]]);
    numberSquare.push(numberStore[numberSquareIndexes[numberSquareIndex][2]]);
    numberSquare.push(numberStore[numberSquareIndexes[numberSquareIndex][3]]);
    let shuffleValue = Math.floor(Math.random() * 4);
    if( shuffleValue === 1 ){
        let temp = numberSquare[0];
        numberSquare[0] = numberSquare[2];
        numberSquare[2] = numberSquare[3];
        numberSquare[3] = numberSquare[1];
        numberSquare[1] = temp;
    }
    else if( shuffleValue === 2 ){
        let temp = numberSquare[0];
        numberSquare[0] = numberSquare[3];
        numberSquare[3] = temp;
        temp = numberSquare[1];
        numberSquare[1] = numberSquare[2];
        numberSquare[2] = temp;
    }
    else if ( shuffleValue === 3 ){
        let temp = numberSquare[0];
        numberSquare[0] = numberSquare[1];
        numberSquare[1] = numberSquare[3];
        numberSquare[3] = numberSquare[2];
        numberSquare[2] = temp;
    }

    numberStore[numberSquareIndexes[numberSquareIndex][0]] = numberSquare[0];
    numberStore[numberSquareIndexes[numberSquareIndex][1]] = numberSquare[1];
    numberStore[numberSquareIndexes[numberSquareIndex][2]] = numberSquare[2];
    numberStore[numberSquareIndexes[numberSquareIndex][3]] = numberSquare[3];
}

    export {numberStore};
    export {shuffleNumberSquare};                                    