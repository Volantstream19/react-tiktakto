import React, { useContext } from 'react';
import { UserContext } from '../../Context/GameContext.js';
import './box.css';

export default function Box({ space, content }) {
  const { setSpace, turnHandler, checkSpace, checkGame } = useContext(UserContext);
  const className = checkSpace(content);
  return (
    <div
      className={`${className} single-space`}
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
