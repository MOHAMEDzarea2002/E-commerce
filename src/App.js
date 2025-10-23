import Navbar from "./component/Navbar";
import Slider from "./component/slider";
import About from "./component/About";
import ProductList from "./component/productList";
import ProductDetails from "./component/ProductDetails";
import FeaturdProduct from "./component/FeaturedProduct";
import Cart from "./component/Cart";
import {CartProvider} from "./component/useCart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
 <CartProvider >
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
              <FeaturdProduct />
            </>
          }
        />
        <Route path="About" element={<About />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="product/:ProductId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
 </CartProvider>




  

  );
}
export default App;
