import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../store/cartSlice';

function Cart() {
  const productsAdded = useSelector((state)=>state.cart)
  const dispatch=useDispatch();
  
  const handleRemove=(product)=>{
    dispatch(removeFromCart(product))
  }
  

  return (
    <div>
      <h2>Cart Products</h2>
      {productsAdded.map((product) => {
        return (
          <div key={product.id} className="cartCard">
            <img src={product.image} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={()=>handleRemove(product)} className="btn">Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart