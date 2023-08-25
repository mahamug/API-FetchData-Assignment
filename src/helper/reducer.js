// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'Show-explore':
//       return {
//         ...state,
//         showExplore: true,
//       };
//     case 'select-products':
//               return{
//                 ...state,
//                 selectedProduct:action.product,
//                 showExplore:true,
//               }
//     case 'set-Products':
//                 return{
//                   ...state,
//                   products: action.data ,
//                 }
//     case 'SET_PRODUCTS':
//                  return { ...state, products: action.payload };
//     case SHOW_PRODUCT_DETAILS:
//                 return { ...state, showProductDetails: true };
//     case actionTypes.HIDE_PRODUCT_DETAILS:
//                 return { ...state, showProductDetails: false };
//     case actionTypes.SET_SELECTED_PRODUCT:
//                 return { ...state, selectedProduct: action.payload };            
//     default:
//       return state;
//   }
// };

// export default reducer