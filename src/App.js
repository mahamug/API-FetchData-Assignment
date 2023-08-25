import React,{useState,createContext, useReducer} from 'react'
import LandingPg from './MyComponents/LandingPg/LandingPg';
import { EcommerceProvider } from './helper/context';
function App() {
  return (
    <EcommerceProvider>
    <div>
      <LandingPg/>
    </div>
    </EcommerceProvider>
  );
}

export default App;
