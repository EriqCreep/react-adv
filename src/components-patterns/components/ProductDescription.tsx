import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { ProductDescriptionProps } from "../interfaces/product.types";

export const ProductDescription = ({
  name,
  description,
}: ProductDescriptionProps) => {
  const { product } = useContext(ProductContext);
  return (
    <div className={styles.productDescription}>
      <h4>{name ?? product.name}</h4>
      <p>{description ?? product.description}</p>
    </div>
  );
};
