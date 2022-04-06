import { numberStore, shuffleNumberSquare} from "./GuessNumberLogic";
import { useState, useEffect } from 'react';

function GuessNumberField(props){
return(<>
    <button className="Number-field" style={{visibility: props.visible}}>{props.number}</button>
    </>)
}

function GuessNumberBoard(){
    shuffleNumberSquare();
    return(<>
        <div className='Game-board'>
        <GuessNumberField number={numberStore[0]} visible={numberStore[0] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[1]} visible={numberStore[1] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[2]} visible={numberStore[2] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[3]} visible={numberStore[3] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[4]} visible={numberStore[4] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[5]} visible={numberStore[5] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[6]} visible={numberStore[6] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[7]} visible={numberStore[7] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[8]} visible={numberStore[8] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[9]} visible={numberStore[9] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[10]} visible={numberStore[10] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[11]} visible={numberStore[11] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[12]} visible={numberStore[12] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[13]} visible={numberStore[13] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[14]} visible={numberStore[14] === 0 ? 'hidden' : ''}/>
        <GuessNumberField number={numberStore[15]} visible={numberStore[15] === 0 ? 'hidden' : ''}/>
         </div>
        </>)
}

export default GuessNumberBoard;