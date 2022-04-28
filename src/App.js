import './App.css';
import GuessNumberBoard  from './NumberPuzzleDisplayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      { <BrowserRouter>
<Routes>
  <Route path='/numberpuzzle' element = {<GuessNumberBoard/>}/>
</Routes>
</BrowserRouter>}
    </div>
  );
}

export default App;
