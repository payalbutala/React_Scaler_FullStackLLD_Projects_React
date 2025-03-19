import { useState } from "react";
import Counter from "./Counter";

const Cart = () => {
    // console.log("Cart.jsx");
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 2, name: "Product 2", price: 200, quantity: 2 },
    { id: 3, name: "Product 3", price: 300, quantity: 3 },
  ]);

  const handleCheckout = () => {
    console.log(products);
  }
  
  const handleQuantityChange = (productId, qty) => {
    const updatedProducts = products.map((product) => {
      return product.id === productId ? {...product, quantity : qty} : product;
    })
    setProducts(updatedProducts);
  }

  return (
    <div>
      <ul>
        {products.map((product, index) => {
          return (
            <li
              key={index} style={{ display: "flex", alignItems: "center", margin: "1rem" }}
            >
              <span style={{margin:"1rem"}}>{product.name} : </span> <span style={{margin:"1rem"}}>Rs. {product.price}</span>
              <Counter quantity={product.quantity} productId={product.id} onUpdate={handleQuantityChange}/>
            </li>
          );
        })}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
