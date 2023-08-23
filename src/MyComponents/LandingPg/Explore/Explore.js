import React, { useState, useEffect, useReducer } from "react";
import ProductDetails from "../../ProductDetails/ProductDetails";
import ListProducts from "../ListProducts";

// const initialState={
//   products:[],
//   showExplore:false,
//   selectedProduct:null
// };
// const reducer=(state,action)=>{
//   switch(action.type){
//     case 'select-products':
//       return{
//         ...state,
//         selectedProduct:action.product,
//         showExplore:true,
//       }
//       case 'set-Products':
//         return{
//           ...state,
//           products: action.data ,
//         }
//       default:
//         return state;
//   }
// }
const Explore = ({ cartCount, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const[state,dispatch]=useReducer(reducer,initialState)

  const handleShowProductDetail = (product) => {
    console.log("Explore: handleOnClick > onAddToCart:", onAddToCart);
    setSelectedProduct(product);
    setShowProductDetails(true);
    // dispatch({ type: 'select-products', });
  };

  const handleShowProductList = () => {
    setShowProductDetails(false);
  };

  useEffect(() => {
    console.log("Explore: Rendered:", onAddToCart);

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    // .then((data) => {dispatch({ type: 'set-Products', data: data })});
  }, []);

  return (
    <>
      {showProductDetails ? (
        <ProductDetails
          product={selectedProduct}
          onAddToCart={onAddToCart}
          handleShowProductList={handleShowProductList}
        />
      ) : (
        <ListProducts
          products={products}
          handleShowProductDetail={handleShowProductDetail}
        />
      )}
    </>
  );
};

export default Explore;
