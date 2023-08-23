import React,{useState} from 'react'
import LandingPg from './MyComponents/LandingPg/LandingPg';


function App() {
 
  const [cartCount, setCartCount] = useState(0); // Cart count state

  // Function to add items to the cart
  const onAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
    <LandingPg cartCount={cartCount} onAddToCart={onAddToCart} />
    </div>
  );
}

export default App;
