import React, { useContext } from 'react';
import { UserContext } from '../../Context/GameContext.js';
import './box.css';

export default function Box({ space, content }) {
  const { setSpace, turnHandler } = useContext(UserContext);
  return (
    <div
      className="box"
      onClick={() => {
        setSpace(space);
        turnHandler();
        console.log(content);
      }}
    >
      fdgdgdg
      {content}
    </div>
  );
}
