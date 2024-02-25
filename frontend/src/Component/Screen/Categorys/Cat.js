import React, { useEffect, useState } from "react";
import "../Products/product.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader";
import { useSelector} from "react-redux";


export default function Product() {
  const [data, setData] = useState([]);
  const data3=useSelector((state)=>state.productArray)
  useEffect(()=>{
    
    const fetchData=()=>{
        try {
            const response2= axios.get("https://dummyjson.com/products?skip=1&limit=10").then(response => {
               
                const data = response.data;
          
                console.log(data);
          
           
                   setData([...data.products])
                return data.products;
              })
           
      } catch (error) {
          console.log("error")
      }
    }
   fetchData();


  },[])
 


  
const navigate=useNavigate();
  const MoveToAboutProduct = (item) => {
    navigate("/product" )
  };

  return (
    <>

      <h1 className="product-1h1"> Products we offer</h1>
      <div className="product-1">
        {data.length > 0 ? (
          <div  className="product-container">
            {data.map((item, index) => (
              <div
                className="product-contain"
                onClick={() => MoveToAboutProduct(item)}
                key={index}
              >
                <div className="product-image">
                  <img alt="service"  src={item.thumbnail}/>
                </div>
                <div className="product-name">{item.title}</div>
                <div className="product-dis">
                  <h3>price: ${item.price}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
     
    
    </>
  );
}
