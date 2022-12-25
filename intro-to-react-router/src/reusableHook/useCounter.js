import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const decrease = () => {
    setCount((count) => (count !== 0 ? count - 1 : count));
  };

  const increase = () => {
    setCount((count) => count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return { count, decrease, increase, reset };
};

export default useCounter;
