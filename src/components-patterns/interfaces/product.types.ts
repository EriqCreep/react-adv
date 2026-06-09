import { JSX, ReactElement } from "react";
import { Product } from "./product.interface";

export interface ProductImageProps {
  img?: string;
  alt?: string;
}

export interface ProductDescriptionProps {
  name?: string;
  description?: string;
}

export interface ProductButtonsProps {
  increaseCountBy: (value: number) => void;
  count: number;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  product: Product;
  count: number;
  increaseCountBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps) : JSX.Element;
  Image: ({ img, alt }: ProductImageProps) => JSX.Element;
  Description: ({ name, description }: ProductDescriptionProps) => JSX.Element;
  Buttons: () => JSX.Element;
}
