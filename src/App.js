import './App.css';
import Board from './Components/Board/Board.js';
import Header from './Components/Header/Header.js';
import GameRestart from './Components/Restart/GameRestart.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <GameRestart />
    </div>
  );
}

export default App;
