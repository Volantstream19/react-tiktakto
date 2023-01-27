import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [active, setActive] = useState(true);
  const [turn, setTurn] = useState('X');
  const [message, setMessage] = useState('');
  const [boxes, setBoxes] = useState([
    {
      space: 1,
      content: '',
    },
    {
      space: 2,
      content: '',
    },
    {
      space: 3,
      content: '',
    },
    {
      space: 4,
      content: '',
    },
    {
      space: 5,
      content: '',
    },
    {
      space: 6,
      content: '',
    },
    {
      space: 7,
      content: '',
    },
    {
      space: 8,
      content: '',
    },
    {
      space: 9,
      content: '',
    },
  ]);

  const setSpace = (space) => {
    setBoxes((prevBox) => {
      return prevBox.map((box) => {
        return box.space === space ? { ...boxes, content: turn } : box;
      });
    });
  };

  function checkSpace(content) {
    let className = '';
    if (content !== '') {
      className = 'not-clickable';
    }
    return className;
  }

  function turnHandler() {
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
  }

  const gameRestart = () => {
    setBoxes((prevBox) => {
      return prevBox.map((box) => {
        return { ...box, content: '' };
      });
    });
    setActive(true);
    setTurn('X');
  };

  return (
    <UserContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        message,
        setMessage,
        boxes,
        setBoxes,
        setSpace,
        turn,
        setTurn,
        turnHandler,
        checkSpace,
        active,
        gameRestart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
