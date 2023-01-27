import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  //   const [active, setActive] = useState(false);
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
        return box.space === space ? { ...boxes, content: 'x' } : box;
      });
    });
  };

  return (
    <UserContext.Provider
      value={{ currentPlayer, setCurrentPlayer, message, setMessage, boxes, setBoxes, setSpace }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
