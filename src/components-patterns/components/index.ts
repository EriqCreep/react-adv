import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./productDescription";
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/product.types";

export { ProductImage } from "./ProductImage";
export { ProductDescription } from "./productDescription";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Description: ProductDescription,
  Buttons: ProductButtons,
});

export default ProductCard;