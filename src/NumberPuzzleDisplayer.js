import { numberStore, shuffleNumberSquare} from "./NumberPuzzleLogic";
import { useState, useEffect} from 'react'

function GuessNumberField(props){
return(<>
    <button className="Number-field" style={{visibility: props.visible}}>{props.number}</button>
    </>)
}

function GuessNumberBoard(){
    const [boardNumbers, setBoardNumbers] = useState(numberStore);
    let [roundValue, setRoundValue] = useState(20);

    const getRoundValue = () => {
    let value = document.getElementById("rounds").value;
    if(!isNaN(value) && 0 < value)
       setRoundValue(value)
    }

    useEffect(() => {
    const intro = setInterval(() =>{
        shuffleNumberSquare();
        setBoardNumbers(() => [...numberStore]);
        setRoundValue(--roundValue);
        if( roundValue === 0 ){
            clearInterval(intro);
        }
        }, 500);
        
      }, []);
    

    return(<>
        <div className='Game-board'>
       {boardNumbers.map((value) => <GuessNumberField  key={value} number={value} visible={value === 0 ? 'hidden' : ''}/>)}
       <button onClick={getRoundValue}>Start</button>
       <input type='text' className="Round-field" id="rounds" value={roundValue}></input>
        </div> 
        </>)
}

export default GuessNumberBoard;