import React from 'react'

const ProductDetails = ({product}) => {
  console.log(product)
  return (
    <div className='productDetailsContainer'>
      <div className='productDetailsImg'>
      <img src={product.image} alt={product.title} />
      </div>
      <div className='productDetails'>
      <h2>{product.title}</h2>
      <h1 className='price'>Rs:{product.price}</h1>
      <span className='description'>{product. description}</span>
      <div className='ProductDetailButton'>
      <button className='ProductPlus'>+</button>
      <span className='numbers'>1</span>
      <button className='ProductSub'>-</button>
      <button className='Product'>Add To Cart</button>
      </div>
      </div>
      </div>
    
  )
}

export default ProductDetails