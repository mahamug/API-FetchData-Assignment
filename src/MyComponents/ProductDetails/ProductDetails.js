import React, { useContext } from "react";
import { ecommerceContext } from "../../helper/context";

const ProductDetails = ({ product, handleShowProductList }) => {
  const{state,handleAddShopping,handleSubShopping}=useContext(ecommerceContext)
  

  return (
    <div className="productDetailsContainer">
      <div className="productDetailsImg">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="productDetails">
        <h2>{product.title}</h2>
        <h1 className="price">Rs:{product.price}</h1>
        <span className="description">{product.description}</span>
        <div className="ProductDetailButton">
          <button onClick={handleAddShopping} className="ProductPlus">
            +
          </button>
          <span className="numbers">{state.count}</span>
          <button onClick={handleSubShopping} className="ProductSub">
            -
          </button>
        </div>
        <div className="ProductDetailButton">
          <button className="Product" onClick={handleAddShopping}>
            Add To Cart
          </button>
          <button
            className="Product"
            onClick={handleShowProductList}
            style={{ marginLeft: 15 }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
