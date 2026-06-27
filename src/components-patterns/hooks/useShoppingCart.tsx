import { useState } from "react";
import {
  ProductInCart,
  OnChangeProductEvents,
} from "../interfaces/product.types";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleProductChange = ({ product, count }: OnChangeProductEvents) => {
    setShoppingCart((prevState) => {
      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prevState;
      //   return rest;
      // }
      // return { ...prevState, [product.id]: { ...product, count } };
      const productInCart: ProductInCart = prevState[product.id] || {
        ...product,
        count: 0,
      };
      const newCount = productInCart.count + count;
      if (Math.max(newCount, 0) > 0) {
        return {
          ...prevState,
          [product.id]: { ...productInCart, count: newCount },
        };
      }
      const { [product.id]: toDelete, ...rest } = prevState;
      return rest;
    });
  };
  
  return { shoppingCart, handleProductChange };
};
