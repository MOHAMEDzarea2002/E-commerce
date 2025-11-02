import { createContext, useState, useContext, useEffect } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  // state Products
  const [Product, setProduct] = useState([]);
  const [CategoryName, setNameCategory] = useState([]);
  // get products on Api
  const api_url = "https://fakestoreapi.com/products";

  // Obtaining PRODUCT AND STORING STATE
const GetProduct = ()=>{
   fetch(api_url)
      .then((response) => response.json())
      .then((data) =>{
        const filters = data.map((item,index) => index <8  ? item : null).filter(item => item !== null);
        setProduct(filters);
      })
      .catch((error) => console.error("Error fetching GetProduct Data:", error));
}
  // Obtaining CATEGORY AND STORING STATE

  const GetNameCategory = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) =>{
        setNameCategory(data);

      })
      .catch((error) => console.error("Error fetching GetCategory Data:", error));
  };
    useEffect(() => {
    GetProduct();
    GetNameCategory();
  }, []);

  const ButtonProductCategory = (CatName) => {
    console.log(CatName)
    fetch(`${api_url}/category/${CatName}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  // state Cart Items
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
      value={{ cartItems, CategoryName,ButtonProductCategory,GetProduct,Product,setProduct,addToCart, incrementQuantity, DecrementQuantity,Deleted}}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}