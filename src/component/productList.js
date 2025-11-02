// import { useEffect, useState  } from "react";
import Products from "./Product";
import { useCart } from "./useCart";

function ProductList() {
  const {  GetProduct,Product,CategoryName,ButtonProductCategory} = useCart();


  return (
    <div className=" mt-3"  >
      <h1 className="my-3 font-monospace text-center">Our Products</h1>
      <div className="container text-center mb-5">
                    <button   type="button" className="btn btn-primary m-1 " onClick={GetProduct}>
              All
            </button>
        {CategoryName.map((cat) => {
          return (
            <button key={cat}  type="button" className="btn btn-primary m-1 " onClick={()=>{
              ButtonProductCategory(cat)

            }}>
              {cat}
            </button>
          );
        })}
        <div className="row">
          {Product.map((Product) => {
            return (
              <div key={Product.id} className="col-12 col-lg-3 col-md-6 col-sm-6">
                <div >
                
                  <Products product={Product} showButton={true} />
                
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProductList;
