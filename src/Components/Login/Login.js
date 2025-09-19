import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
    const [userData, setuserData] = useState({ email: "", password: "" })
    function handleEmail_id(event) {
        let user = { ...userData }
        user["email"] = event.target.value;
        setuserData(user)
    }
    function handlePassword(event) {
        let user = { ...userData }
        user["password"] = event.target.value;
        setuserData(user)
    }
    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate("/register")
    }
    const navigateToLogin = () => {
        navigate("/login")
    }
    const navigateToDashboard = () => {
        navigate("/loginregister")
    }

    function handleLoginData() {
  if (!userData.email || !userData.password) {
    alert("Please enter email and password");
    return;
  }

  axios.get("http://localhost:3001/user")
    .then((response) => {
      const user = response.data.find(
        (singleElement) =>
          singleElement.email_id === userData.email &&
          singleElement.password === userData.password
      );

      if (user) {
        console.log("logged in successfully");
        localStorage.setItem("userName", user.userName);
        localStorage.setItem("userEmail", user.email_id);
        navigate("/blogs");
      } else {
        alert("Invalid email or password");
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      alert("Something went wrong, please try again.");
    });
}




    return (
        <div className="background23">
            <div className="header">
                <div className="headername" onClick={navigateToDashboard}>Blogs</div>
                <div>
                    <span className="headerlinks" onClick={navigateToLogin}>Login</span>
                    <span className="headerlinks" onClick={navigateToRegister}>Register</span>
                </div>
            </div>
            <div>
                <div className="loginsection">
                    <div className="firstname">Blogs</div>
                    <div className="secondline">Publish your passion,your way...</div>
                    <div className="loginname">Login</div>
                    <label>Email id</label><br />
                    <input type="text" placeholder="Test@gmail.com" className="inputtag" value={userData.email} onChange={handleEmail_id} /><br />
                    <label>Password</label><br/>
                    <input type="Password" placeholder="Test@123" className="inputtag" value={userData.password} onChange={handlePassword} /><br />
                    <button className="buttonlogin" onClick={handleLoginData}>Login</button>
                </div>
            </div>
        </div>
    );
}
export default Login;