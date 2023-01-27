import React, { useContext } from 'react';
import { UserContext } from '../../Context/GameContext.js';
import './GameRestart.css';

export default function GameRestart({ space }) {
  const { gameRestart, active } = useContext(UserContext);
  return (
    <>
      {!active && (
        <button
          className="button"
          onClick={() => {
            gameRestart(space);
          }}
        >
          Reset game
        </button>
      )}
    </>
  );
}
