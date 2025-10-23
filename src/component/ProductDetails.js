import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowProductDetails from "./ShowProductDetails"


function ProductDetails() {

  const [product,setproduct] = useState({})
  const api_url = "https://fakestoreapi.com/products"
    const params = useParams()
    useEffect(()=>{
      fetch(`${api_url}/${params.ProductId}`).then((resolve)=>{
        return resolve.json()
      }).then((Product)=>{
        return setproduct(Product)
      })
    },[params.ProductId])
    console.log(params)
  return (
    <div className="container">
    <ShowProductDetails product={product} showButton={false}/>
    </div>
  );
}

export default ProductDetails;
