import { useEffect, useState  } from "react";
import Products from "./Product";

function ProductList() {
  // get products on Api
  const api_url = "https://fakestoreapi.com/products";
  // state Products
  const [Product, setProduct] = useState([]);
  const [CategoryName, setNameCategory] = useState([]);
  
  // Obtaining PRODUCT AND STORING STATE

const GetProduct = ()=>{
   fetch(api_url)
      .then((response) => response.json())
      .then((data) =>{
        const filters = data.filter((item) => item.price <= 11);
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
  // Button Category
  const ButtonProductCategory = (CatName) => {
    console.log(CatName)
    fetch(`${api_url}/category/${CatName}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  };


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
