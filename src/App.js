import './App.css';
import NumberPuzzleBoard  from './NumberPuzzleDisplayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      { <BrowserRouter>
<Routes>
<Route path='/' element={<NumberPuzzleBoard/>}/>
  <Route path='/numberpuzzle' element={<NumberPuzzleBoard/>}/>
</Routes>
</BrowserRouter>}
</div>
  );
}

export default App;
