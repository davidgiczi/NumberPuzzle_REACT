import { numberStore, shuffleNumberSquare} from "./NumberPuzzleLogic";
import { useState } from 'react'
let roundValueByUser;
function GuessNumberField(props){
return(<>
    <button className="Number-field" style={{visibility: props.visible}}>{props.number}</button>
    </>)
}

function GuessNumberBoard(){
    const [boardNumbers, setBoardNumbers] = useState(numberStore);
    let [roundValue, setRoundValue] = useState(20);
    const [btnText, setBtnText] = useState('Start');

    const startGame = () => {
    let inputValue = document.getElementById('rounds').value;
    if(parseInt(inputValue) === 0){
        setRoundValue(roundValueByUser);
        setBtnText('Start');
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
        setBoardNumbers(() => [...numberStore]);
        setRoundValue(--roundValue);
        }, 500);
    }
    
    const setShuffleValue = (event) => {
        if( 0 < event.target.value ){
        setRoundValue(event.target.value);
         }
        else {
        setRoundValue(20);
         }
    }

    return(<>
        <div className='Game-board'>
       {boardNumbers.map((value) => <GuessNumberField  key={value} number={value} visible={value === 0 ? 'hidden' : ''}/>)}
       <Button onClick={startGame} text={btnText}/>
       <input className="Round-field" id="rounds" value={roundValue} onChange={setShuffleValue}></input>
        </div> 
        </>)
}

function Button(props){
    return (<button onClick={props.onClick} >{props.text}</button>)
}

export default GuessNumberBoard;