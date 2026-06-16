import { JSX } from "react";
import { Product } from "./product.interface";
import { ProductCardProps } from "../components/ProductCard";
import { ProductDescriptionProps } from "../components/ProductDescription";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";
export interface ProductContextProps {
  product: Product;
  count: number;
  increaseCountBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Description: (Props: ProductDescriptionProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
