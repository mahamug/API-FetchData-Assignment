import React, { useState, useEffect, useReducer, useContext } from "react";
import ProductDetails from "../../ProductDetails/ProductDetails";
import ListProducts from "../ListProducts";
import { ecommerceContext } from "../../../helper/context";

const Explore = () => {
const { handleShowProductList,handleShowProductDetail,state,onAddToCart,dispatch}=useContext(ecommerceContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => dispatch({ type:'SET_PRODUCTS', payload: data }));
    
  }, [onAddToCart,dispatch]);
 

  return (
    <>
      {state.showProductDetails ? (
        <ProductDetails
          product={state.selectedProduct}
          onAddToCart={onAddToCart}
          handleShowProductList={handleShowProductList}
        />
      ) : (
        <ListProducts
          products={state.products}
          handleShowProductDetail={handleShowProductDetail}
        />
      )}
    </>
  );
};

export default Explore;
