import { createContext, CSSProperties, JSX, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import {
  OnChangeProductEvents,
  ProductCardHandlers,
  ProductCardInitialValues,
  ProductContextProps,
} from "../interfaces/product.types";
import { Product } from "../interfaces/product.interface";

export interface ProductCardProps {
  product: Product;
  children?:
    | ReactElement
    | ReactElement[]
    | ((args: ProductCardHandlers) => JSX.Element);
  className?: string;
  style?: CSSProperties;
  onChange?: (event: OnChangeProductEvents) => void;
  value?: number;
  initialValues?: ProductCardInitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { count, increaseCountBy, maxCount, isMaxCountReached, resetCount } =
    useProduct({
      product,
      value,
      onChange,
      initialValues,
    });

  return (
    <Provider value={{ product, count, increaseCountBy, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {/* <ProductImage img={product.imageUrl} alt={product.name} />
        <ProductDescription
          name={product.name}
          description={product.description}
        />
        <ProductButtons /> */}
        {children &&
          (typeof children === "function"
            ? children({
                product,
                count,
                increaseCountBy,
                maxCount,
                isMaxCountReached,
                resetCount,
              })
            : children)}
      </div>
    </Provider>
  );
};

// ProductCard.Image = ProductImage;
// ProductCard.Description = ProductDescription;
// ProductCard.Buttons = ProductButtons;
