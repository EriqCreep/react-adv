import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { OnChangeProductEvents, ProductContextProps } from "../interfaces/product.types";
import { Product } from "../interfaces/product.interface";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (event: OnChangeProductEvents) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value }: ProductCardProps) => {
  const { count, increaseCountBy } = useProduct({product, value, onChange});

  return (
    <Provider value={{ product, count, increaseCountBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {/* <ProductImage img={product.imageUrl} alt={product.name} />
        <ProductDescription
          name={product.name}
          description={product.description}
        />
        <ProductButtons /> */}
        {children}
      </div>
    </Provider>
  );
};

// ProductCard.Image = ProductImage;
// ProductCard.Description = ProductDescription;
// ProductCard.Buttons = ProductButtons;
