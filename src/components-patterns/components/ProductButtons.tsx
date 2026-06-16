import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}


export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { count, increaseCountBy } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => increaseCountBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>
        <span>{count}</span>
      </div>
      <button className={styles.buttonAdd} onClick={() => increaseCountBy(1)}>
        +
      </button>
    </div>
  );
};
