import { useEffect, useRef, useState } from "react";
import { OnChangeProductEvents } from "../interfaces/product.types";
import { Product } from "../interfaces/product.interface";

export interface UseProductArgs {
  product: Product;
  value?: number;
  onChange?: (event: OnChangeProductEvents) => void;
}

export const useProduct = ({ product, value, onChange }: UseProductArgs) => {
  const [count, setCount] = useState(value ?? 0);
  const isControlled = useRef(!!onChange);

  const increaseCountBy = (value: number) => {
    if(isControlled.current) {
      return onChange!({ product, count: value });
    }
    const newValue = Math.max(count + value, 0);
    setCount(() => newValue);
    onChange && onChange({ product , count: newValue });
  };

  useEffect(() => {
    setCount(value ?? 0);
  }, [value]);

  return { count, increaseCountBy };
};
