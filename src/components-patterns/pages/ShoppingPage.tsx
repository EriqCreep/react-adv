import {
  ProductButtons,
  ProductCard,
  ProductDescription,
  ProductImage,
} from "../components";
import "../styles/custom-styles.css";
import { productsDummy } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, handleProductChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* <ProductCard product={product}>
          <ProductImage />
          <ProductDescription />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product2} className="bg-black">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Description name="Taza de cafe" description="" className="text-danger" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}

        {productsDummy.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            onChange={(event) => handleProductChange(event)}
          >
            <ProductImage />
            <ProductDescription />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            style={{ width: "6rem" }}
            value={product.count}
            onChange={(event) => handleProductChange(event)}
          >
            <ProductImage className="custom-image" />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
