import { useEffect, useState } from 'react';

type Counter = {
  count: number;
  countUp: () => void;
  countDown: () => void;
};

const useCounter = (initialNum: number): Counter => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initialNum);
  }, [initialNum]);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return {
    count,
    countUp,
    countDown,
  };
};

export default useCounter;
