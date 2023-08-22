import React,{useState,useEffect} from 'react'
import ProductDetails from '../../ProductDetails/ProductDetails';

const Explore = ({  onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [showExplore, setShowExplore] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  const handleOnClick = (product) => {
    setSelectedProduct(product);
    setShowExplore(true);
  };
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    
    <>
      {showExplore ? (
        <ProductDetails product={selectedProduct}  onAddToCart={onAddToCart} />
      ) : (
        <div className='container'>
      {products.map((product) => (
        <div className='box' key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className='overlay'>
            <div className='explore'>
            <button  onClick={() =>{ handleOnClick(product);}} product={products}>View Product</button>
            </div>
          </div>
        </div>
      ))}
      </div>
      )}
 </>
  );
}

export default Explore