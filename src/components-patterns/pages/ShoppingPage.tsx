import { ProductButtons, ProductCard, ProductDescription, ProductImage } from "../components";
import { Product } from "../interfaces/product.interface";


const product: Product = {
  id: 1,
  name: "Coffee Mug",
  price: 100,
  description: "Product Description",
  imageUrl: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductDescription />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Description name="Taza de cafe" description="" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
