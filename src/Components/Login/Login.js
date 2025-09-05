import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
function Login(){
 const navigate =useNavigate();
 const navigateToRegister=()=>{
    navigate("/register")}
    const navigateToLogin=()=>{
        navigate("/login")
    }
    const navigateToDashboard=()=>{
        navigate("/loginregister")
    }
    const navigateTohelloworld=()=>{
        navigate("/blogs")
    }
    
 

    return(
        <div className="background">
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
                <label>Email id</label><br/>
                <input type="text" placeholder="Test@gmail.com" className="inputtag"/><br/>
                <label>Password</label><br/>
                <input type="Password" placeholder="Test@123" className="inputtag"/><br/>
                <button className="buttonlogin" onClick={navigateTohelloworld}>Login</button>
                </div>
            </div>
        </div>
    );
}
export default Login;