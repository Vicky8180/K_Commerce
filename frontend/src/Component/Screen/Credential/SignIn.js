import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, auth, userData } from "../../../action";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = () => {
    LoginFun();

    console.log("Signing up...");
  };
  const moveToSignUp = () => {
    navigate("/singup");
  };
  const dispatch =useDispatch()


  const LoginFun = async () => {
    try {
      const data = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/login`, {
        email: email,
        password: password,
      });
      if (data.data.status === true) {
        dispatch(userData(data.data))
        dispatch(auth(data.data.status))
        const temp=data.data.data.products
       console.log(temp)
       for(let i=0;i<temp.length;i++){
        dispatch(addToCart(temp[i]));
       }
        alert("You ARe ongged in");
        navigate("/cartdisplay")
      }
      console.log(data);
    } catch (error) {
      alert("Error in login");
    }
  };
  return (
    <>
      <NavBar />
      <div className="Login_main">
        <div className="sign_up_top">
          <h2>Login Account</h2>
          <div className="signup-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="checkbox_align">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember
            </label>

            <button onClick={handleSignUp}>Sign In</button>

            <p className="signin-link">
              Are you new?{" "}
              <a onClick={moveToSignUp} href="/signup">
                {" "}
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
