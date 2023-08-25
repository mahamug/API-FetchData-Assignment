import React, { useContext } from 'react'
import { ecommerceContext } from '../../helper/context'
function ListProducts() {
  const{state, handleShowProductDetail}=useContext(ecommerceContext)
  return (
    <div className="container">
    {state.products.map((product) => (
      <div className="box" key={product.id}>
        <img src={product.image} alt={product.title} />
        <div className="overlay">
          <div className="explore">
            <button
              onClick={() => handleShowProductDetail(product)}
              product={state.products}
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ListProducts