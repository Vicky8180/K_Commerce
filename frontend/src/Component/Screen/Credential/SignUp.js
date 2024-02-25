import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";
import axios from "axios";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    fetchData()

    console.log("Signing up...");
  };

  const moveToSignIn = () => {
    navigate("/login");
  };
    const fetchData = async () => {
      try {
        const data = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}api/register`, {
          "name": name,
          "email": email,
          "password": password
        });
      
    // console.log()
    if(data.data.status===true){
      moveToSignIn();
    }else {
      alert("error sorry !")
    }

      } catch (error) {
        console.error("Error in registration:", error);
        alert("Error in Registration");
      }
    };

  

  return (
    <>
      <NavBar />

      <div className="Login_main">
        <div className="sign_up_top">
          <h2>Create Account</h2>
          <div className="signup-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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

            <button onClick={handleSignUp}>Sign Up</button>

            <p className="signin-link">
              Are you already user ?{" "}
              <a onClick={moveToSignIn} href="/login">
                {" "}
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
