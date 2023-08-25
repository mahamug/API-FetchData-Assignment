import React,{ createContext,useReducer,} from "react";
const ecommerceContext = createContext();
const initialState = {
  cartCount:0,
  count:0,
  showExplore: false,
  products:[],
  showProductDetails:false,
  selectedProduct:null
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'ON-ADD-TO-CART':
      return{
        ...state,
        cartCount: state.cartCount+1
      }
      case'ADD_SHOPPING':
    return{
      ...state,
      count:state.count +1, 
      cartCount:state.cartCount+1
    }
    case'SUB_SHOPPING':
    return{
      ...state,
      count:state.count -1, 
      cartCount: state.cartCount-1
    } 
    case 'Show-explore':
      return {
        ...state,
        showExplore: true,
      };
    case 'select-products':
              return{
                ...state,
                selectedProduct:action.product,
                showExplore:true,
              }
    case 'set-Products':
                return{
                  ...state,
                  products: action.data ,
                }
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SHOW_PRODUCT_DETAILS':
      return { ...state, showProductDetails: true };
    case 'HIDE_PRODUCT_DETAILS':
      return { ...state, showProductDetails: false };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };            
      default:
        return state
  }
}
const EcommerceProvider =({children})=>{
const[state,dispatch]=useReducer(reducer,initialState)
const onAddToCart = () => {
  dispatch({type:'ON-ADD-TO-CART'})
};
const handleAddShopping = () => {
  dispatch({type:'ADD_SHOPPING'})
  // onAddToCart();
};
const handleSubShopping = () => {
  if (state.count > 1) {
    dispatch({type:'SUB_SHOPPING'})
  }
};
const handleOnClick = () => {
  // setShowExplore(true);
  dispatch({ type: "Show-explore" });
};
const handleShowProductDetail = (product) => {
  dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
  dispatch({ type: 'SHOW_PRODUCT_DETAILS' });
 
};

const handleShowProductList = () => {
  dispatch({ type: 'HIDE_PRODUCT_DETAILS' });
};
return(
  <ecommerceContext.Provider value={{state,
  onAddToCart,
  handleAddShopping,
  handleSubShopping,
  handleOnClick,
  handleShowProductDetail,
  handleShowProductList,
  dispatch
  }}>
    {children}
  </ecommerceContext.Provider>
)
}
export{EcommerceProvider,ecommerceContext}