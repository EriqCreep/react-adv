import { useEffect, useRef, useState } from "react";
import {
  OnChangeProductEvents,
  ProductCardInitialValues,
} from "../interfaces/product.types";
import { Product } from "../interfaces/product.interface";

export interface UseProductArgs {
  product: Product;
  value?: number;
  onChange?: (event: OnChangeProductEvents) => void;
  initialValues?: ProductCardInitialValues;
}

export const useProduct = ({
  product,
  value = 0,
  onChange,
  initialValues,
}: UseProductArgs) => {
  const [count, setCount] = useState<number>(initialValues?.count ?? value);
  const isMounted = useRef(false);
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    if (!isMounted.current) return;
    setCount(initialValues?.count ?? value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const increaseCountBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ product, count: value });
    }
    let newValue = Math.max(count + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCount(() => newValue);
    onChange && onChange({ product, count: newValue });
  };

  const resetCount = () => {
    setCount(initialValues?.count ?? value);
  };

  return {
    count,
    increaseCountBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === count,
    resetCount,
  };
};
