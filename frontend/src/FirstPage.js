import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Carousel from "./Component/Screen/Carousal/carousal";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cat from "./Component/Screen/Categorys/Cat"
export default function FirstPage() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      try {
        const response2 = axios
          .get("https://dummyjson.com/products?skip=1&limit=100")
          .then((response) => {
            const data = response.data;

            console.log(data);

            setData([...data.products]);

            return data.products;
          });
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
       <Cat/>
    </>
  );
}
