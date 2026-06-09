import { useState } from "react";

export const useProduct = () => {
  const [count, setCount] = useState(1);

  const increaseCountBy = (value: number) => {
    if (count + value < 0) return;
    setCount((prev) => prev + value);
  };

  return { count, increaseCountBy };
};
