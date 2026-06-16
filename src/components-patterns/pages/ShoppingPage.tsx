import { ProductButtons, ProductCard, ProductDescription, ProductImage } from "../components";
import { Product } from "../interfaces/product.interface";
import "../styles/custom-styles.css";


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

        <ProductCard product={product} className="bg-black">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Description name="Taza de cafe" description="" className="text-danger" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
