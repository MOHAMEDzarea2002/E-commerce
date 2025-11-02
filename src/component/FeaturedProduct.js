import "../css/cssfeatur.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function FeaturedProduct() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container my-5 ">
      <h1 className=" my-5 "> Featurd Products</h1>

      <div className=" row   ">
        <div className="col-7 d-none d-md-block ">
                  {product.slice(19, 20).map((item) => {
          return (
            <div
              key={item.id}
              className="card h-100 p-2"
            >
              <img
              draggable="false"
                src={item.image}
                className="card-img-top featuredImage"
                alt="..."
                style={{
                  height: "300px",
                  objectFit: "contain",
                }}
              />
               <div>
                 {item.rating && (
                      <span className="badge bg-success ms-2">
                        {item.rating.rate} &#9733;
                      </span>
                    )}
               </div>
              <div>
                 <div className="card-body  featured absolute bg-white bg-opacity-75 w-100">
                <h5 className="card-title mt-5">{item.title}</h5>
                <p
                  className="card-text"
                  style={{
                    flexGrow: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                  
                </p>
                <div>
                  <div className="d-flex align-items-center justify-content-between mt-5 ">
            <NavLink to={`/product/${item.id}`} className="btn btn-primary">
              Show
            </NavLink>
                    <div className="d-flex flex-column align-items-center ">
                    
                    
                  <h6 className="fw-bold mt-2">${item.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
              </div>
             
            </div>
          );
        })}
        </div>
       <div className=" col-12 col-md-5 gap-3 ">
         {product.slice(15, 18).map((item) => {
          return (
            <div
              key={item.id}
              className=" card p-4 mt-3  position-relative overflow-hidden "
            >
              <img
              draggable="false"
                src={item.image}
                className="card-img-top"
                alt="..."
                style={{
                  height: "140px",
                  width: "140px",
                  margin: "auto"
                  ,
                  objectFit: "contain",
                }}
              />
              <div className="card-body position-absolute featured bg-white bg-opacity-75 w-100">
                <h5 className="card-title">{item.title}</h5>

                <div>
                  <h6 className="fw-bold">${item.price}</h6>
                  <div className="d-flex align-items-center justify-content-between ">
            <NavLink to={`/product/${item.id}`} className="btn btn-primary">
              Show
            </NavLink>
                    {item.rating && (
                      <span className="badge bg-success ms-2">
                        {item.rating.rate} &#9733;
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
       </div>
      </div>
    </div>
  );
}
export default FeaturedProduct;
