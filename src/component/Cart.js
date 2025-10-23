
import { useCart } from "./useCart";

function Cart() {
  // imported UseContext
  const {Deleted,cartItems} = useCart()
  return (
    <div className="container pt-4">
      <div className="col-10 overflow-x-auto ">
        <div className="Cart d-flex align-items-center">
          <h1>Shopping Cart</h1>
          <img
            alt="Img Shoping"
            src={require("../images/Cart.png")}
            style={{ height: "50px" }}
          />
        </div>
        <div className="d-flex justify-content-between border-bottom pb-2 px-4">
          <div>Product</div>
          <div
            className="d-flex"
            style={{ width: "240px", justifyContent: "space-between" }}
          >
            <div className=" mx-lg-0 mx-md-0 mx-mx-3 mx-5  ">Price</div>
            <div>Quantity</div>
            <div>Activ</div>
          </div>
        </div>
        {cartItems.length <=0 ? (
          <p>Your cart is empty 🛒</p>
        ) :( cartItems.map((item) => (
            <div key={item.id} className="border-bottom py-4 ">
          <div className="d-flex justify-content-between px-3 table-responsive">
                <div className="d-flex align-items-center" style={{gap:"10px"}}>
                  <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{
                  height: "90px",
                  width: "90px",
                  objectFit: "contain",
                }}
              />
              <h5
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "0px",
                
                }}>{item.title}</h5>
              </div>
                <div
                  className="d-flex "
                  style={{  textAlign:"center", width: "250px", justifyContent: "space-between" ,alignItems:"center" }}
                >
                  <div>${item.price * item.quantity}</div>
                  <div>{item.quantity}</div>
                  <div className="btn btn-outline-primary" 
                    onClick={()=>{
                    Deleted(item.id)
                    }}>Delet</div>
                </div>
              </div>
            </div>
          ))
        
        )}
      </div>
    </div>
  );
}

export default Cart;
