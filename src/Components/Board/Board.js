import React, { useContext } from 'react';
import { UserContext } from '../../Context/GameContext.js';
import Box from '../Box/box.js';
import './Board.css';

export default function Board() {
  const { boxes } = useContext(UserContext);
  return (
    <div className="board">
      {boxes.map((box) => {
        <Box key={box.space} content={box.content} />;
      })}
    </div>
  );
}
