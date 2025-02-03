import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const productsAdded = useSelector((state)=>state.cart)

  return (
    <div>
      <h2>Cart Products</h2>
      {productsAdded.map((product) => {
        return (
          <div key={product.id} className="cartCard">
            <img src={product.image} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={()=>handleRemove(product.id)} className="btn">Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart