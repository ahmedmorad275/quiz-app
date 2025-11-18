import { useContext, useState } from 'react';
import { mainContext } from './Context';

const ContextProvider = ({ children }) => {
  useContext(mainContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('General Knowledge');
  const [difficulty, setDifficulty] = useState('Medium');
  const [timer, setTimer] = useState(20);
  const [current, setCurrent] = useState(0);
  const correctAnswers = [];
  const wrongAnswers = [];

  const value = {
    name,
    setName,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    timer,
    setTimer,
    current,
    setCurrent,
    wrongAnswers,
    correctAnswers,
  };

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export default ContextProvider;
