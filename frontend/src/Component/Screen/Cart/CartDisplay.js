import React, { useState } from "react";
import "./CratDisplay.css";
import { useSelector } from "react-redux";
import NavBar from "../../Navbar/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const products = useSelector((state) => state.addToCart);
  const auth = useSelector((state) => state.auth);
  console.log(products);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };
  const navigate = useNavigate();
  const movetologin = () => {
    navigate("/login");
  };

  const done = () => {
    if (cart.length === 0) {
      alert("Nothing to ship");
    }
    alert("Items are checked out");
  };
  return (
    <>
      <NavBar />

      {auth ? (
        <div className="container">
          <div className="left">
            <h2>Product List</h2>
            <ul>
              {products.length > 0 ? (
                <>
                  {products.map((product) => (
                    <li className="lists_dis" key={product.id}>
                      <img src={product.images[0]} alt={product.name} />
                      <div>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>
                          Finalise
                        </button>
                      </div>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  <div>
                    <h2>Sorry your cart is empty...</h2>
                  </div>
                </>
              )}
            </ul>
          </div>
          <div className="right">
            <h2>Receipt</h2>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.title} - ${product.price}
                </li>
              ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
            <button onClick={done}>Checkout</button>
          </div>
        </div>
      ) : (
        <div>
          <h2> Please login to add products in cart </h2>
          <Button onClick={movetologin}>Login</Button>
        </div>
      )}
    </>
  );
};

export default ProductList;
