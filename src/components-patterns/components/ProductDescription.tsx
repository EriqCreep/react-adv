import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ProductDescriptionProps {
  name?: string;
  description?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductDescription = ({
  name,
  description,
  className,
  style,
}: ProductDescriptionProps) => {
  const { product } = useContext(ProductContext);
  return (
    <div className={`${styles.productDescription} ${className}`} style={style}>
      <h4>{name ?? product.name}</h4>
      <p>{description ?? product.description}</p>
    </div>
  );
};
