import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export interface ProductImageProps {
  img?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}


export const ProductImage = ({ img, alt, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.imageUrl) {
    imgToShow = product.imageUrl;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt={alt ?? product.name}
    />
  );
};
