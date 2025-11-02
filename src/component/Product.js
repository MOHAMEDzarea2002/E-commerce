import { NavLink } from "react-router-dom";
import { useCart } from "./useCart";



// import {  useState } from "react";
import imagedProduct from "../images/add-to-cart.png";
import imgDoneProduct from "../images/DoneAddTo Cart.png";


function Product(props) {
  // Get Product 
  const { product } = props;

  //Import UseContext
  const { addToCart,incrementQuantity,DecrementQuantity ,cartItems } = useCart();
//  state Button Add
  // const [ButtonAddInCart, setButtonAddInCart] = useState(false);
  
  // Get ShowQuantityInProduct
  const ShowQuantityInProduct = cartItems.find((item)=> item.id === product.id )

  const IconsButtonAdd = cartItems.find((item)=> item.id === product.id ?  item.ButtonAddInCart = true : false)
  // AddProductInPageCart
  function AddToPageCart() {
    addToCart(product)
    }
    
  // INcrement QuantityProduct
  function IncreaseProduct() {
    incrementQuantity(product)
  }
  // Decrement QuantityProduct
  function DecrementProduct() {
    DecrementQuantity(product)
  }




  return (
    <div className="card my-2  d-flex flex-column" style={{ height: "450px" }}>
      <img
        src={product.image}
        className="card-img-top  mx-auto mt-3"
        style={{ height: "150px",width:"150px", objectFit: "contain" }}
        alt="product"
        draggable={false}
      />

      <div className="card-body d-flex flex-column justify-content-end">
        <h5 className="card-title text-truncate">{product.title}</h5>
                      <NavLink
          to={`/product/${product.id}`}
          className=""
        >
          <p
          className="card-text text-muted"
          style={{
            flexGrow: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </p>
        </NavLink>
        
        <h6 className="fw-bold ">${product.price}</h6>

<div className="d-flex justify-content-between align-items-center">
  <div className="d-flex flex-column">

        <button className="btn btn-outline-primary mt-2 " onClick={AddToPageCart}>
          { IconsButtonAdd ? (<img alt="" style={{height:"24px"}} src={imgDoneProduct}/>) : ( <img  style={{height:"24px"}} alt="" src={imagedProduct}/>)
}
        </button>
  </div>
          <div className=" d-flex  align-items-center " >
          <button className="btn btn-outline-primary mt-2 " onClick={IncreaseProduct} >
            +
          </button>
          <div className="p-2 mt-2">{ShowQuantityInProduct&& <div>{ShowQuantityInProduct.quantity}</div>}</div>
          <button className="btn btn-outline-primary mt-2 "onClick={DecrementProduct}>
            -
          </button>
        </div>
</div>

      </div>
    </div>
  );
}
export default Product;

