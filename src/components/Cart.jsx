import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { deleteProduct } from "../redux/action";

function Cart() {
    const {cartAr}= useSelector(state=>state.cartReducer)
    const dispatch =useDispatch()
    console.log('cartAr:' , cartAr);
  return (
    <div>
      GIỎ HÀNG
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "100vh",
          padding: "20px",
          paddingLeft: "100px",
          textAlign: "start",
        }}
      >
        {cartAr.map((product) => (
          <div key={product.id} style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>{product.title}</div>
            {product.quantity === undefined ? (
              <div style={{ width: "40%" }}>{`${product.price}`}</div>
            ) : (
              <div
                style={{ width: "40%" }}
              >{`${product.price}x${product.quantity}`}</div>
            )}
            <div style={{ width: "5%" }}>
              <button onClick={()=>dispatch(deleteProduct(cartAr    ))} >X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
