import React, { useContext } from 'react';
import { UserContext } from '../../Context/GameContext.js';
import './GameRestart.css';

export default function GameRestart({ space }) {
  const { gameRestart } = useContext(UserContext);
  return (
    <>
      <button
        className="button"
        onClick={() => {
          gameRestart(space);
        }}
      >
        Reset game
      </button>
    </>
  );
}
