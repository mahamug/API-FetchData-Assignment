import React from 'react'

function ListProducts({products, handleShowProductDetail}) {
  return (
    <div className="container">
    {products.map((product) => (
      <div className="box" key={product.id}>
        <img src={product.image} alt={product.title} />
        <div className="overlay">
          <div className="explore">
            <button
              onClick={() => handleShowProductDetail(product)}
              product={products}
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