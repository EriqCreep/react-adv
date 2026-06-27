import { Product } from "../interfaces/product.interface";

export const productDummy: Product = {
  id: 1,
  name: "Coffee Mug",
  price: 100,
  description: "Product Description",
  imageUrl: "./coffee-mug.png",
};

export const productDummy2: Product = {
  id: 2,
  name: "Coffee Mug 2",
  price: 200,
  description: "Product Description 2",
  imageUrl: "./coffee-mug2.png",
};

export const productsDummy: Product[] = [productDummy, productDummy2];
