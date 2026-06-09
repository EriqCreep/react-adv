import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { ProductContextProps, ProductCardProps } from "../interfaces/product.types";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { count, increaseCountBy } = useProduct();

  return (
    <Provider value={{ product, count, increaseCountBy }}>
      <div className={styles.productCard}>
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
