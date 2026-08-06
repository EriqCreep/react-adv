import { JSX } from "react";
import { Product } from "./product.interface";
import { ProductCardProps } from "../components/ProductCard";
import { ProductDescriptionProps } from "../components/ProductDescription";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";
export interface ProductContextProps {
  product: Product;
  count: number;
  maxCount?: number;
  increaseCountBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Description: (Props: ProductDescriptionProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeProductEvents {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductCardInitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseCountBy: (value: number) => void;
  resetCount: () => void;
}
