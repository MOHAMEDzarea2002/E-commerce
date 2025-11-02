import { NavLink } from "react-router-dom";
import { useCart } from "./useCart";
import imagedProduct from "../images/add-to-cart.png";
import imgDoneProduct from "../images/DoneAddTo Cart.png";

function ShowProductDetails(props) {
  const { product, showButton } = props;
  // Get from Fill UseCart.js
  const { addToCart,DecrementQuantity, incrementQuantity,cartItems } = useCart();

   const IconsButtonAdd = cartItems.find((item)=> item.id === product.id ?  item.ButtonAddInCart = true : false)

  // Add To PageCart 
  function AddToCart() {
    addToCart(product);
  }
  const GetInShowQuantity = cartItems.find((item)=> item.id === product.id)
  
  function increment(){
    incrementQuantity(product)
  }
  function Decrement(){
    DecrementQuantity(product)
  }
  return (
    <>
      <div className="card">
        <img
          src={product.image}
          className="card-img-top p-4 object-fit-contain"
          style={{ height: "200px",width:"200px", margin:"auto" }}
          alt="product"
          draggable={false}
        />
        <div className="card-body">
          {/* <h1 className="card-category">{product.category}</h1> */}
          <h4 className="card-title">{product.title}</h4>
          <h6 className="card-title ">{product.description}</h6>
          <p className="card-text ">{product.price}</p>
          {showButton && (
            <NavLink to={`/product/${product.id}`} className="btn btn-primary">
              Show
            </NavLink>
          )}
          <div>
            <button className="btn btn-outline-primary mt-2 " onClick={AddToCart}>
{ IconsButtonAdd ?( <img alt="" style={{height:"24px"}} src={imgDoneProduct}/>) : (<img  style={{height:"24px"}} alt="" src={imagedProduct}/>)}
            </button>
            <div className=" d-flex  align-items-center ">
              <button
                className="btn btn-outline-primary mt-2 "
                onClick={increment}
              >
                +
              </button>
              <div className="p-2 mt-2">
                {GetInShowQuantity && <div>{GetInShowQuantity.quantity}</div>}
              </div>
              <button
                className="btn btn-outline-primary mt-2 "
                onClick={Decrement}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShowProductDetails;
