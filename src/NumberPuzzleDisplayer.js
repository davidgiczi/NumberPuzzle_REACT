import { shuffleNumberSquare, step, isTheEndOfTheGame } from './NumberPuzzleLogic';
import { NUMBER_STORE, sumShuffleValue, initSumShuffleValue } from './NumberPuzzleLogic';
import welldone from './icon/welldone.jpg';
import { useState } from 'react'
let roundValueByUser;

function NumberPuzzleField(props){
return(<>
    <button className='Number-field' onClick={props.onClick} 
    style={{visibility: props.visible, color: props.color, backgroundImage : props.image}}>{props.number}</button>
    </>)
}

function NumberPuzzleBoard(){
    const [boardNumbers, setBoardNumbers] = useState(NUMBER_STORE);
    const [btnText, setBtnText] = useState('Kever');
    let [roundValue, setRoundValue] = useState(20);
    let [inputValue, setInputValue] = useState(20);
    let [clickValue, setClickValue] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#008000');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [hidden, setHidden] = useState('hidden');
    
    const startGame = () => {
    setBackgroundColor('#008000');
    setHidden('hidden');
    setClickValue(0);
    if(inputValue === 0){
        setRoundValue(roundValueByUser);
        setInputValue(roundValueByUser);
        setBtnText('Kever');
        return;
    }
    else {
        roundValueByUser = inputValue;
    }
    const intro = setInterval(() =>{
        if( roundValue === 0 ){
            setBtnText('Újra');
            clearInterval(intro);
            return;
        }
        shuffleNumberSquare();
        setBoardNumbers(() => [...NUMBER_STORE]);
        setRoundValue(--roundValue);
        setInputValue(--inputValue);
        }, 500);
    }
    
    const setShuffleValue = (event) => {
        if( 0 < event.target.value ){
        setRoundValue(event.target.value);
        setInputValue(event.target.value);
         }
    }

    const stepPlayer = (clickedNumberValue) => {
       setClickValue(++clickValue);
       step(clickedNumberValue);
       setBoardNumbers(() => [...NUMBER_STORE]);
       evaluateResult();
    }

    const evaluateResult = () => {

        if(isTheEndOfTheGame()){
            setHidden('');
            setBackgroundColor('#a52a2a');
            setBackgroundImage('url(' + welldone + ')');
       const evaluate = sumShuffleValue >= clickValue ? "Gratulálunk!" : "Sebaj, legközelebb!";
       setTimeout(() => {alert(evaluate +
            "\n\nMaximálisan szükséges lépések száma: " + sumShuffleValue + " db" +
            "\nLépéseid száma: " + clickValue + " db"); initSumShuffleValue()}, 1000);
        }
    }

    return(<>
        <div className='Game-board'>
       {boardNumbers.map((value) =>
        <NumberPuzzleField onClick={() => stepPlayer(value)} key={value} 
        color={value !== 0 ? backgroundColor : 'transparent'} 
        image={value === 0 ? backgroundImage : ''} number={value} visible={value === 0 ? hidden : ''}/>)}
       <Button onClick={startGame} text={btnText}/>
       <InputField onChange={setShuffleValue} roundValue={roundValue}/>
        </div> 
        </>)
}

function Button(props){
    return (<button className='Btn-class' onClick={props.onClick} >{props.text}</button>)
}

function InputField(props){
    return (<input className='Round-field' value={props.roundValue} onChange={props.onChange}></input>)
}

export default NumberPuzzleBoard;