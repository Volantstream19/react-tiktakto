import React, { useContext } from 'react';
import { UserContext } from '../../Context/GameContext.js';
import './box.css';

export default function Box({ space, content }) {
  const { setSpace } = useContext(UserContext);
  return (
    <div
      className="box"
      onClick={() => {
        setSpace(space);
      }}
    >
      I am a Box THis is my Box
      {content}
    </div>
  );
}
