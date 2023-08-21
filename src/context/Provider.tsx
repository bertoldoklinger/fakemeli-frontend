import { useState } from "react";
import { Product } from "../components/Products/Products";
import { AppContext } from "./AppContext";








export function Provider({ children }:React.PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false)

  
  const value = {
    products, setProducts,
    loading,setLoading,
    cartItems, setCartItems,
    isCartVisible, setIsCartVisible
  }
  
  return ( 
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

