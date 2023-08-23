import React, { useEffect, useState } from "react";
import Explore from "../LandingPg/Explore/Explore";

const ProductDetails = ({ product, onAddToCart, handleShowProductList }) => {
  // console.log("ProductDetail: product>", product);
  const [count, setCount] = useState(0);
  const handleAddShopping = () => {
    setCount(count + 1);

    // console.log("ProductDetail: handleAddShopping > onAddToCart:", onAddToCart);
    onAddToCart();
  };

  const handleSubShopping = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // useEffect(() => {
  //   console.log("ProductDetail: showExplore Changed");
  //   console.log("ProductDetail: useEffect > onAddToCart:", onAddToCart);
  // }, [showExplore]);

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
          <span className="numbers">{count}</span>
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
