import { createContext, useState, useContext, useEffect } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(()=>{
    const saved = localStorage.getItem("product")
      return saved ? JSON.parse(saved) : [];
  });
  // Function Add Product In Page Cart 
  function addToCart(product) {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      return null;
    } else {
      setCartItems([...cartItems,  {...product, quantity: 1 , ButtonAddInCart:false}]);
    }
  }

  // Set Product In LocalStorage
  useEffect(()=>{
      localStorage.setItem("product",JSON.stringify(cartItems))
  },[cartItems])
  // Delete Product In Page Cart
    function Deleted(ProductID){
  const removeProduct =  cartItems.filter((item)=> item.id !== ProductID)
  setCartItems(removeProduct)
}
  // incrementQuantity  
  function incrementQuantity(product) {
    const FoundProduct = cartItems.find((items) => items.id === product.id);
    if (FoundProduct) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    }
  }
  function DecrementQuantity(product) {
    const exist = cartItems.find((items) => items.id === product.id);
    if (exist && exist.quantity >= 1) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
      );
    }
  }
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementQuantity, DecrementQuantity,Deleted}}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}