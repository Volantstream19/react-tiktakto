import './App.css';
import Board from './Components/Board/Board.js';
import Box from './Components/Box/box.js';
import GameRestart from './Components/Restart/GameRestart.js';

function App() {
  return (
    <div className="App">
      <Board />
      <GameRestart />
    </div>
  );
}

export default App;
