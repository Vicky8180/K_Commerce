
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./product.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader";
import { useSelector} from "react-redux";


export default function Product() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const baseURL = "http://localhost:5000/";
  const data3=useSelector((state)=>state.productArray)
// console.log(data3)
  useEffect(()=>{
    
    const fetchData=()=>{
        try {
            const response2= axios.get("https://dummyjson.com/products?skip=1&limit=100").then(response => {
                // Access the data from the response
                const data = response.data;
          
                // Now you can work with the data
                console.log(data);
          
                // Return the data if needed
                   setData([...data.products])
                return data.products;
              })
            //   setData2([...response2])
            // console.log(data2)
      } catch (error) {
          console.log("error")
      }
    }
   fetchData();


  },[])
 


  const handleImageTransformation = async (imagePath) => {
    const fileName = getFileNameFromPath(imagePath);
    const transformedImage = prependStringToFileName(fileName, baseURL);
    return transformedImage;
  };

  const getFileNameFromPath = (path) => {
    const parts = path.split('\\');
    return parts[parts.length - 1];
  };

  const prependStringToFileName = (fileName, prefix) => {
    return prefix + fileName;
  };
const navigate=useNavigate();
  const MoveToAboutProduct = (item) => {
   
    navigate("/productview" , {state:{"data":item}})
  };

  return (
    <>

      <h1 className="product-1h1"> Products we offer</h1>
      <div className="product-1">
        {/* <div className="product-line"></div>
        <div className="product-container"></div> */}
        {data.length > 0 ? (
          <div  className="product-container">
            {data3.map((item, index) => (
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
