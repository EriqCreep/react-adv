import {
  ProductButtons,
  ProductCard,
  ProductDescription,
  ProductImage,
} from "../components";
import "../styles/custom-styles.css";
import { productsDummy } from "../data/products";
const product = productsDummy[0];

export const ShoppingPageInitializer = () => {
  return (
    <div>
      <h1>Shopping Page Initializer</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ resetCount, increaseCountBy, count, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductDescription />
            <ProductButtons />

            <button onClick={resetCount}>Reset</button>

            <button onClick={() => increaseCountBy(-2)}> - 2 </button>
            {!isMaxCountReached && (
              <button onClick={() => increaseCountBy(2)}> + 2 </button>
            )}

            <span>count: {count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
