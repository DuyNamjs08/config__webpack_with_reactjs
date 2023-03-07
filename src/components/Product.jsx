import React from "react";

import {useDispatch} from 'react-redux'
import { buyProduct } from "../redux/action";

function Product({ id,title, price }) {
    const dispatch=useDispatch()
    const product_current={  id,title, price }
    console.log(product_current);
  return (
    <div style={{ width: "100%", display: "flex", marginBottom: "10px" }}>
      <div style={{ width: "30%", backgroundColor: "orange" }}>{title}</div>
      <div style={{ width: "60%", backgroundColor: "aquamarine" }}>{price}</div>
      <div style={{ width: "10%" }}>
        <button style={{ width: "100%", height: "100%" }}
        onClick={()=>dispatch(buyProduct(product_current))}
        >Mua</button>
      </div>
    </div>
  );
}

export default Product;
