
import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductImageProps } from "../interfaces/product.types";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img, alt }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.imageUrl) {
    imgToShow = product.imageUrl;
  } else {
    imgToShow = noImage;
  }
  return <img className={styles.productImg} src={imgToShow} alt={alt ?? product.name} />;
};