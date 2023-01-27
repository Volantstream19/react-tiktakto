import React, { useContext } from 'react';
import { UserContext } from '../../Context/GameContext.js';
import './box.css';

export default function Box({ space, content }) {
  const { setSpace, turnHandler, checkSpace, checkGame, endGame } = useContext(UserContext);
  const className = checkSpace(content);
  const gameEnder = endGame(content);
  return (
    <div
      className={`${className} ${gameEnder} box`}
      onClick={() => {
        setSpace(space);
        turnHandler();
        checkSpace(content);
        checkGame();
      }}
    >
      {content}
    </div>
  );
}
