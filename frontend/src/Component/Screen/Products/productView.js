import React, { useEffect, useState } from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import { Checkbox } from "@mui/material";

import Navbar from "..//../Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../../action";
import axios from "axios";
export default function AboutProduct() {
  const location = useLocation();
const dispatch=useDispatch();
  const [data, setData] = useState(location.state.data);
  console.log(data);
const userData= useSelector((state)=>state.userData)
  const discountPercentage = (data.price * data.discountPercentage) / 100;
const auth=useSelector((state)=>state.auth)
const navigate=useNavigate();

  var incease=0;
const [imageL, setImageL]=useState(data.images[0]);
  const imageChanger=()=>{
   incease++;
   setImageL(data.images[incease]);

   if(incease===data.images.length-1){
    incease=0;
    setImageL(data.images[incease]);
   }else {
    setImageL(data.images[incease]);
   }

  }
const addToCartFun=async()=>{

  if(auth===true){
    dispatch(addToCart(data));


    try {
      console.log("33")
      console.log(userData.data.email)
      const data1=await axios.put(`${process.env.REACT_APP_BASE_URL_PORT}/api/updateProducts/${userData.data.email}`,{
        "products":data
      })
      console.log(data1)

       
    } catch (error) {
      alert("Error in backend ")
    }




  }else {
    navigate("/login");
  }

}
  return (
    <>
      <Navbar />
      <div className="a-pro-1">
        <div className=" a-pro-left">
          <div className="a-pro-left-img">
            <img alt="D" src={imageL} className="a-pro-left-img-1" />
            <button onClick={imageChanger}>Next</button>
          </div>
          <div className="a-pro-left-discribe">
            <div className="discription">
              <h3>About Product</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
        <div class="break-line"></div>
        <div className=" a-pro-right">
          <div className="a-pro-right-name">
            <h3>{data.title}</h3>
          </div>

          <div className="a-pro-right-rating">
            <Rating name="read-only" value={data.rating} readOnly />
            <div> Rating -{data.rating}</div>
          </div>
          <div className="a-pro-right-price">
            <span className="pro-right-price-value"> Price: ${data.price}</span>
          </div>
          <div className="a-pro-right-price">
            <span className="pro-right-price-value">
              {" "}
              Discount: ${discountPercentage}
            </span>
          </div>
          <div className="a-pro-right-price">
            <div className="a-pro-right-price-total">
              Total: $ {data.price - discountPercentage}
            </div>
            <div a-pro-right-price-total-symbol> </div>
            <span className="pro-right-price-value-total"></span>
          </div>

          <div className="a-pro-right-termandconditions">
            <div>
              <Checkbox> </Checkbox>{" "}
            </div>

            <div className="termandcondition">Accept Term & conditions</div>
          </div>
          <div className="a-pro-right-buttons">
          <button className="a-pro-right-call-now1" onClick={addToCartFun}>Add to cart</button>
            <button className="a-pro-right-call-now">Check-out</button>
          </div>

          <div className="a-pro-bottom-about-product">
            <div className="a-pro-bottom-name2">
              <h3>Service Detail</h3>
            </div>
            <div className="a-pro-bottom-discribtion">
              <ul>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
